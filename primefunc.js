const prompt = require("prompt-sync")();
function primeNum(num) {
    let count = 0;
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) count++;
    }
    return count;
}

let number = prompt("Enter a number: ");
count = primeNum(number);
if(count == 2)
    console.log(number+" is a prime number.");
else
    console.log(number+" is not a prime number.");