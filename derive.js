const Web3 = require("web3");
const EthUtil = require('ethereumjs-util');
require('dotenv').config()

const privateKey = process.env.privateKey;

const privateKeyBuffer = EthUtil.toBuffer(privateKey);
const address = EthUtil.privateToAddress(privateKeyBuffer).toString('hex');


console.log("Public Aaddress", address);

