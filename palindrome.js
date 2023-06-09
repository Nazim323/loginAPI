const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
let rev = [...str].reverse().join('');

if(rev == str)
    console.log("the given string is palindrome!")
else
    console.log("the given string is not palindrome!")