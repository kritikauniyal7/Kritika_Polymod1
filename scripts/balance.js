const { ethers } = require("hardhat");
require("dotenv").config();

// const polygonBridgeAddress = "0xd47C108D4182E6c7fbc9Fe2140dE4293618e1d00"; 
const polygonContractAddress = process.env.POLYGON_CONTRACT; 
const accountAddress = process.env.PUBLIC_KEY; 

async function balance() {
  const polygonContract = await ethers.getContractAt(
    "UNFTC",
    polygonContractAddress
  );

  const balanceOnMumbai = await polygonContract.balanceOf(accountAddress);
  console.log(`Balance of NFTs on Mumbai: ${balanceOnMumbai}`);
}

balance().catch((err) => {
  console.log(err);
});
