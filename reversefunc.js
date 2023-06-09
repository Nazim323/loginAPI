const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
rev = reverse(str);
console.log("reverse of the string is:\n"+rev);

function reverse(str) {
    return [...str].reverse().join('');    
}  
