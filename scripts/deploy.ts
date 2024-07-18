import { ethers } from "hardhat";

async function main() {
  const contractApi = await ethers.getContractFactory("contractApi");
  const contractApi_ = await contractApi.deploy();

  console.log("Contract Address: ", (contractApi_ as any).address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
