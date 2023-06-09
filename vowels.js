function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("hyderabad"));
console.log(vowel_Count("bengaluru"));
