/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*"       // Any network (default: none)
        },
        // Another network with more advanced options...
        // advanced: {
        // port: 8777,             // Custom port
        // network_id: 1342,       // Custom network
        // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        // from: <address>,        // Account to send txs from (default: accounts[0])
        // websocket: true        // Enable EventEmitter interface for web3 (default: false)
        // },

        arbitrum: {
            provider: () => new HDWalletProvider(
                // throw-away seed for dev
                process.env.PRIVATE_KEY,
                `https://arbitrum-mainnet.infura.io/v3/28e5737b9034453d877f39dcf3f297b9`
            )
            ,
            network_id: 42161,
            networkCheckTimeout: 1000000,
            timeoutBlocks: 200
        },

        arbitrum_rinkeby: {
            provider: () => new HDWalletProvider(
                // throw-away seed for dev
                'maid side truck wood tuition engine onion extra frozen garbage car eager',
                `https://arbitrum-rinkeby.infura.io/v3/28e5737b9034453d877f39dcf3f297b9`
            )
            ,
            network_id: 421611,
            networkCheckTimeout: 10000000,
            timeoutBlocks: 200
        },
        arbitrum_goerli: {
            provider: () => new HDWalletProvider(
                // throw-away seed for dev
                process.env.PRIVATE_KEY,
                `https://arbitrum-goerli.infura.io/v3/${process.env.ARB_GOERLI_API_KEY}`
            )
            ,
            network_id: 421613
        }
    },
    compilers: {
        solc: {
            version: "0.8.3",    // Fetch exact version from solc-bin (default: truffle's version)
            docker: false        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    }
};
