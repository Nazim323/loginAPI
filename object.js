let person ={
    "name": "john",
    "age" : 30,   
    "city": "new york",

"myFunction": function() {
    console.log("hello world");
},
myAge: function () {
    return this.age;
},
}

console.log(person.myAge());

