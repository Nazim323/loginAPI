const ages = [20, 40, 60, 17, 28];

// use the every() method
let check = ages.every(checkAge); 

function checkAge(age)
{
   return age>18;
}
console.log(check)
