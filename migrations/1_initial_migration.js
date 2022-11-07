const Migrations = artifacts.require("AutismRegistrar");

module.exports = function (deployer) {
    deployer.deploy(Migrations, {
        from: `${process.env.DEPLOYER_ADDRESS}`,
    });
};
