require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rival office quality grid argue metal gift'; 
let testAccounts = [
"0x4d3fb20c543e0b3abef1caf0467682aafec61f5482aa3366ff579e44c89bd7fa",
"0xf34f722ae1bc24efe6b4b81490e9ab5dd53a6b20fc0d8f75e3d1495433c3c126",
"0xc5c8b172529b74ebc3fc27ca0694b2605e0a16f96b900f0acf412df7ef82afed",
"0xdf67fe9f96aeb9d7cf99fbfac458b53b1346566f2dcca64ba13a3c2e3b6f09d6",
"0xe530334ac00e6006661f9166072b2c42045032da8386aa732444f9cfae730b09",
"0x818f63715669e3d3d0bd93371153cccbf26340d96e8ad5c0bcf228be449b1048",
"0xb05197ecf2c51059b0ef7ddc200f0282cabf66d88baa3187e2e5ca9764135f5d",
"0xd7eb76ba402a53f058096adc4e03f199cee0678976c7c225a7f04e71fa5cb666",
"0x5f3ce20b1dc091603e8c54ee2acefe1fa6591f14e59237228ca44ba920eac75c",
"0x4c0a7386f8647d6ef687e662d9dfbdb619cf718896acbe6415b3b4b582079d64"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
