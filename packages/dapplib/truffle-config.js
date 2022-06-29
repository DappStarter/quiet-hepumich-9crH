require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe story crawl scrub pumpkin harvest brave army giant'; 
let testAccounts = [
"0x637a8b2d2958f4d1658a5e9f343616edfbdc5bda2570b458a111a779d8513630",
"0x0a733fbdb4dbbe7bc7cf2eb01b74869ac8625020bff6ffb645c6b67a15df7c8f",
"0x200d7913c91980558ce621a7235999b0c6e63290b1a5564ea9805998138d4232",
"0xcf09fe1e0bdebad1787160529cc2eb7d2197576b0af138d9c668dac85b110776",
"0x14b9b59c5e3240013133c944786910f61efd35eeca85b25ffff57176747c360d",
"0xc18c8db4ce6ce545197a614fdf4a925d440a6bd0ccbc0b1eb374bfc69250cc45",
"0x342a20d8dbd34b010af082f09782c9b8f34ee9ce01eff47389cea6e3a5c3b279",
"0x7ef36704b5854155bd6ff32abcec23bd799fedb4c0747b427eaad939b08b20ef",
"0x8e33c53ea0e617ae68b97efe53b1891f395333cd7d2854d0384c0d70c8cbe148",
"0x2d91013ec33037bc88f51881d4144151144125c6beeb6875ba6ec51940c9d6f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


