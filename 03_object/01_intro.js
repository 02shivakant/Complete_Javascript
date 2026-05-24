//singleton:
// use by  => Object.create()
 
// objects literals

const newSymbol = Symbol["index"]
const myObject  = {
    name: "Shivakant pandey",
    email: "shivakant@google.com",
    password: 12344,
    [newSymbol] : "newIndex",
    "Sur Name" : "Pandey Jii",
    status : "true",
}

myObject.newFunction = function(){
    console.log(`hii i'm function and my user is :  ${this.name} `);
}
console.log(myObject.newFunction());
