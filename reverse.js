const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
str = [...str].reverse().join('');
console.log("reverse of the string is:\n"+str);
