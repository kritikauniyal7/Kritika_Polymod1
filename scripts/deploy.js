const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Define the contract name, symbol, and description
  const name = "Kritika NFT Collection";
  const symbol = "Kritika_NFT";
  const promptDesc =
    "a coin made up of titanium, platinum and diamond painted by van gogh";

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Contract Deployer's address: ${deployerAddress}`);

  // Deploy the Kritika_NFT contract
  const Kritika_NFT = await ethers.getContractFactory("Kritika_NFT");
  const Kritika_NFT = await Kritika_NFT.deploy(promptDesc, name, symbol);

  // Wait for the contract to be mined
  await Kritika_NFT.deployed();

  // Print the contract address and transaction hash
  console.log("Kritika_NFT deployed to:", Kritika_NFT.address);
  console.log("Transaction hash:", Kritika_NFT.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
