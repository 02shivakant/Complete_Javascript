
// asign function in objects
const obj1 = {1:"xyz", 2:"uyt", 3:"kjl"}
const obj2 = {4:"xyz", 5:"uyt", 6:"kjl"}
//const obj3 = {obj1 , obj2}  --> method 1
//const obj3 = Object.assign(obj1,obj2)  --> method 2
const obj3 = {...obj1,  ...obj2}
//console.log(obj3)

// objects works in key : value pairs  and by using keys we can use as a index 

const myObject  = {
    name: "Shivakant pandey",
    email: "shivakant@google.com",
    password: 12344,
}
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));
