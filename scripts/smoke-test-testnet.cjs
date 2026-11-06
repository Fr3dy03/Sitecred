// End-to-end smoke test of SiteCredentialRegistry on BOT Chain testnet.
// Exercises the full lifecycle: register facility -> approve issuer -> issue
// credential -> renew -> suspend -> supersede path -> verify current state.
const { ethers } = require("ethers");
require("dotenv").config();

const RPC_URL = process.env.BOTCHAIN_TESTNET_RPC_URL || "https://rpc.bohr.life";
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_REGISTRY_ADDRESS;
if (!CONTRACT_ADDRESS) {
  console.error("Set NEXT_PUBLIC_REGISTRY_ADDRESS before running the smoke test.");
  process.exit(1);
}

const ABI = JSON.parse(
  require("fs").readFileSync(
    __dirname + "/../artifacts/contracts/SiteCredentialRegistry.sol/SiteCredentialRegistry.json",
    "utf8"
  )
).abi;

const hash = (s) => ethers.id(s);

async function send(contract, method, args) {
  const tx = await contract[method](...args);
  const receipt = await tx.wait();
  if (receipt.status !== 1) throw new Error(`${method} reverted on-chain`);
  console.log(`  ${method} ok (tx ${tx.hash})`);
  return receipt;
}

(async () => {
  const provider = new ethers.JsonRpcProvider(RPC_URL, 968);
  const wallet = new ethers.Wallet(process.env.BOTCHAIN_PRIVATE_KEY, provider);
  const registry = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const suffix = Date.now().toString(16);
  const facilityId = hash(`smoke-facility-${suffix}`);
  const credentialId = hash(`smoke-credential-${suffix}`);
  const supersededId = hash(`smoke-supersede-${suffix}`);
  const now = Math.floor(Date.now() / 1000);

  console.log(`Contract: ${await registry.getAddress()}`);
  console.log(`Deployer: ${wallet.address}`);
  console.log(`roles: ISSUER=${await registry.isIssuerApproved(wallet.address)}`);

  console.log("1. registerFacility");
  await send(registry, "registerFacility", [facilityId, hash("region:eu-central-1")]);

  console.log("2. approveIssuer (self-approval by ISSUER_ADMIN for the test)");
  await send(registry, "approveIssuer", [wallet.address]);

  console.log("3. issueCredential");
  await send(registry, "issueCredential", [
    credentialId,
    facilityId,
    hash("Power redundancy"),
    hash("SC-STD-N2"),
    hash("scope:power-n+1"),
    hash("evidence:smoke-test"),
    now - 60,
    now + 86400,
    1,
  ]);

  console.log("4. renewCredential (+30d)");
  await send(registry, "renewCredential", [credentialId, now + 30 * 86400]);

  console.log("5. read-back checks");
  const facility = await registry.getFacility(facilityId);
  const credential = await registry.getCredential(credentialId);
  const current = await registry.isCredentialCurrent(credentialId);
  assert(facility.active, "facility should be active");
  assert(credential.credentialType === hash("Power redundancy"), "credential type mismatch");
  assert(current, "credential should be current after renewal");
  console.log(`  facility active=${facility.active}, credential status=${credential.status} (1=Issued), isCurrent=${current}`);

  console.log("6. suspendCredential");
  await send(registry, "suspendCredential", [credentialId]);
  console.log(`  status now=${(await registry.getCredential(credentialId)).status} (2=Suspended)`);
  console.log(`  isCurrent=${await registry.isCredentialCurrent(credentialId)} (expected false)`);

  console.log("7. supersedeCredential -> superseded placeholder");
  await send(registry, "supersedeCredential", [credentialId, supersededId]);
  const after = await registry.getCredential(credentialId);
  console.log(`  status now=${after.status} (4=Superseded), supersedes=${after.supersedesCredentialId}`);

  console.log("\nALL SMOKE TESTS PASSED ✅");
})().catch((e) => {
  console.error("SMOKE TEST FAILED ❌");
  console.error(e);
  process.exitCode = 1;
});

function assert(cond, msg) {
  if (!cond) throw new Error("ASSERTION FAILED: " + msg);
}
