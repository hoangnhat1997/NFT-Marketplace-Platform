import { HardhatUserConfig } from "hardhat/types";

require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;

console.log("API_URL", API_URL);
console.log("PRIVATE_KEY", PRIVATE_KEY);

const config: HardhatUserConfig = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000, // Adjust if needed
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

export default config;
