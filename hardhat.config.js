require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const Tutorial = await hre.ethers.getContractFactory("Tutorial");
  const tutorialContract = await Tutorial.deploy("Tutorial Contract", "ART");

  await tutorialContract.deployed();

  // FIXME: Actually some kind of bug with etherscan is going on because delay from api response to know if deployed
  await new Promise((resolve) => setTimeout(resolve, 30000));


  await hre.run("verify:verify", {
    address: tutorialContract.address,
    constructorArguments: [
      "Tutorial Contract",
      "TUT"
    ]
  })

})

module.exports = {
  solidity: "0.8.12",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};
