function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
   
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  if(str1 === str2){
      console.log("it is a anagram");
    } else { 
      console.log("it is not a anagram");
  }
}
checkStringsAnagram("horse","shora")



// const prompt = require("prompt-sync")();
// const str1 = prompt("Enter the first string: ");
// const str2 = prompt("Enter the second string: ");
// const sortedStr1 = str1.split("").sort().join("");
// const sortedStr2 = str2.split("").sort().join("");
// if (sortedStr1 === sortedStr2) {
//   console.log("The two strings are anagrams!");
// } else {
//   console.log("The two strings are not anagrams.");
// }