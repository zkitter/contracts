const Migrations = artifacts.require("AutismRegistrar");

module.exports = function (deployer) {
    deployer.deploy(Migrations, {
        // from: "0x5d432ce201d2c03234e314d4703559102Ebf365C",
        from: "0x860C68abeEE0ecBd97729C7d1E09dA1e7EaD3C50",
    });
};