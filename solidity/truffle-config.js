var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      networkCheckTimeout: 1000000,
      provider: function () {
        return new HDWalletProvider(process.env.mnemonic, "https://rinkeby.infura.io/v3/3760dd3a73834a399e69a9c451e9aa18");
      },
      network_id: 4,
      gas: 29970592,
      gasPrice: 10000000000,
    },
    goerli: {
      networkCheckTimeout: 1000000,
      provider: function () {
        return new HDWalletProvider(process.env.mnemonic, `https://goerli.infura.io/v3/${process.env.goerli_key}`);
      },
      network_id: 5,
      gas: 29970592,
      gasPrice: 10000000000,
    }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.16",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
