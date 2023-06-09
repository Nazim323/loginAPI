const prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");
rev = palindrome(str);

if(rev == str)
    console.log("the given string is palindrome!")
else
    console.log("the given string is not palindrome!")
    
function palindrome(str) {
    return [...str].reverse().join('');
}