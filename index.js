const CryptoJS = require("crypto-js");

var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

console.log(`Encrypted : ${ciphertext}`);
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(`Decrypted : ${originalText}`);