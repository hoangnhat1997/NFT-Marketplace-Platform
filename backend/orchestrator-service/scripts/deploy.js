const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("contractApi");
  const contract = await Contract.deploy();

  console.log("Contract deployed to:", contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
