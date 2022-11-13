require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { INFURA_PROJECT_ID, MNEMONIC } = process.env;

console.log(INFURA_PROJECT_ID, MNEMONIC);
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // eslint-disable-line camelcase
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`
        );
      },
      network_id: "5", // eslint-disable-line camelcase
      gas: 5500000,
      networkCheckTimeout: 10000,
      timeoutBlocks: 200,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.9", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
