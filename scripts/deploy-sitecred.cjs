const { ethers } = require("hardhat");

if (!process.env.BOTCHAIN_PRIVATE_KEY) {
  throw new Error("BOTCHAIN_PRIVATE_KEY is not set. Create a .env file from .env.example before deploying to BOT testnet.");
}

async function main() {
  const [deployer] = await ethers.getSigners();

  const network = await ethers.provider.getNetwork();
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log(`Network: ${network.name} (chainId: ${network.chainId})`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deployer balance: ${ethers.formatEther(balance)} BOHR`);

  const factory = await ethers.getContractFactory("SiteCredentialRegistry");
  const contract = await factory.deploy();

  console.log(`Deployment transaction: ${contract.deploymentTransaction().hash}`);
  await contract.waitForDeployment();

  console.log(`SiteCredentialRegistry deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
