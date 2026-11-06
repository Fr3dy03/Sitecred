require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    bot_testnet: {
      url: process.env.BOTCHAIN_TESTNET_RPC_URL || "https://rpc.bohr.life",
      chainId: 968,
      accounts: process.env.BOTCHAIN_PRIVATE_KEY ? [process.env.BOTCHAIN_PRIVATE_KEY] : [],
    },
  },
};
