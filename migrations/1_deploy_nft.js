
const NFTContract = artifacts.require("memeNFT");

module.exports = function (deployer) {
  deployer.deploy(NFTContract);
};
