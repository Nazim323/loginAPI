const prompt = require("prompt-sync")();
function factorial(num) {
    let fact = 1;
    for(let i = 1; i <= num; i++) 
        fact *= i; 
    return fact;
}

let number = prompt("Enter a number: ");
result = factorial(number);
console.log("factorial is = "+result);