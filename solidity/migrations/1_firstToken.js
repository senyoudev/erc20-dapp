var FirstToken=artifacts.require("FirstToken.sol");


module.exports = function(deployer,network, accounts) {
      deployer.deploy(FirstToken,1000,{from: accounts[0]});
}

