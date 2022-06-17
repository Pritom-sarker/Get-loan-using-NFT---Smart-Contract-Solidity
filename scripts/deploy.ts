// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DebtNFT = await ethers.getContractFactory("DebtNFT");
  const debtNft = await DebtNFT.deploy("Dog NFT");

  await debtNft.deployed();

  console.log("DebtNFT deployed to:", debtNft.address);

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  await nft.createCollectible("Dog NFT");

  await nft.approve(debtNft.address, 0);

  const DEBT = await ethers.getContractFactory("Debt");
  const debt = await DEBT.deploy("1", "1", nft.address);

  await debt.deployed();
  console.log("DEBT deployed to:", debt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
