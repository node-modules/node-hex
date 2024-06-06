const crypto = require('crypto');
const hex = require('.');

console.log(hex(crypto.getRandomValues(Buffer.alloc(512))));
