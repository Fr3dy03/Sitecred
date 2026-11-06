// Creates deterministic demo data on the deployed registry so the public
// verification UI can be exercised without knowing smoke-test hashes.
// Idempotent: reuses the demo facility and skips re-approval / re-issue.
const { ethers } = require("ethers");
require("dotenv").config();

const RPC_URL = process.env.BOTCHAIN_TESTNET_RPC_URL || "https://rpc.bohr.life";
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_REGISTRY_ADDRESS;
if (!CONTRACT_ADDRESS) {
  console.error("Set NEXT_PUBLIC_REGISTRY_ADDRESS first.");
  process.exit(1);
}

const ABI = JSON.parse(
  require("fs").readFileSync(__dirname + "/../artifacts/contracts/SiteCredentialRegistry.sol/SiteCredentialRegistry.json", "utf8")
).abi;

const id = (s) => ethers.id(s); // deterministic seeds -> stable bytes32

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL, 968);
  const wallet = new ethers.Wallet(process.env.BOTCHAIN_PRIVATE_KEY, provider);
  const registry = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const facilityId = id("demo-facility-001");
  const credentialId = id("demo-credential-001");
  const now = Math.floor(Date.now() / 1000);

  const facility = await registry.getFacility(facilityId);
  if (facility.createdAt === 0n) {
    const tx = await registry.registerFacility(facilityId, id("region:demo"));
    await tx.wait();
    console.log("registered demo facility: " + facilityId);
  } else {
    console.log("demo facility already registered");
  }

  if (!(await registry.isIssuerApproved(wallet.address))) {
    const tx = await registry.approveIssuer(wallet.address);
    await tx.wait();
    console.log("approved issuer " + wallet.address);
  } else {
    console.log("issuer already approved");
  }

  const credential = await registry.getCredential(credentialId);
  if (credential.issuedAt === 0n) {
    const tx = await registry.issueCredential(
      credentialId,
      facilityId,
      id("Power redundancy"),
      id("SC-STD-N2"),
      id("scope:power-n+1"),
      id("evidence:demo"),
      now - 60,
      now + 30 * 86400,
      1
    );
    await tx.wait();
    console.log("issued demo credential: " + credentialId);
  } else {
    console.log("demo credential already issued (status " + credential.status + ")");
  }

  console.log("\n--- verification references (type these in the UI) ---");
  console.log("credential seed:   demo-credential-001");
  console.log("credential bytes32: " + credentialId);
  console.log("facility bytes32:   " + facilityId);
  console.log("isCurrent: " + (await registry.isCredentialCurrent(credentialId)));
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
