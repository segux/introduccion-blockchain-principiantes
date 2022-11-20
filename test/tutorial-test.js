const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Tutorial Smart Contract Tests", function () {
  let tutorialContract;

  this.beforeEach(async function () {
    // This is executed before each test
    // Deploying the smart contract
    const Tutorial = await ethers.getContractFactory("Tutorial");
    tutorialContract = await Tutorial.deploy("Tutorial Contract", "ART");
  });

  it("NFT is minted successfully", async function () {
    [account1] = await ethers.getSigners();

    const balanceBeforeMint = await tutorialContract.balanceOf(account1.address);
    expect(balanceBeforeMint.toNumber()).to.equal(0);

    const tokenURI =
      "https://opensea-creatures-api.herokuapp.com/api/creature/1";
    const tx = await tutorialContract.connect(account1).mint(tokenURI);

    const balanceAfterMint = await tutorialContract.balanceOf(account1.address);
    expect(balanceAfterMint.toNumber()).to.equal(1);
  });

  it("tokenURI is set sucessfully", async function () {
    [account1, account2] = await ethers.getSigners();

    const tokenURI_1 =
      "https://opensea-creatures-api.herokuapp.com/api/creature/1";
    const tokenURI_2 =
      "https://opensea-creatures-api.herokuapp.com/api/creature/2";

    const tx1 = await tutorialContract.connect(account1).mint(tokenURI_1);
    const tx2 = await tutorialContract.connect(account2).mint(tokenURI_2);

    expect(await tutorialContract.tokenURI(0)).to.equal(tokenURI_1);
    expect(await tutorialContract.tokenURI(1)).to.equal(tokenURI_2);
  });
});
