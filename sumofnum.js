const prompt = require("prompt-sync")();
let arr = [];
let size = prompt("Enter size of the array: ");

console.log("Enter ",size," elements in array");
for(i=0; i<size; i++){
    arr[i] = prompt();
}


let sum = 0;


for (let i = 0; i < arr.length; i++ ) {
  sum += arr[i];
}
result = sum(arr);
console.log(sum) 
