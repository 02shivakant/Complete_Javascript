// we have following types of scopes 
// 1. Global Scope  2. Functional Scope  3. Block Scope

// var is always be a global scope 
var a = 32;     //global Scope
console.log(a);
{
    console.log(a);
    
}
function name(params) {
    console.log(a);
}
name()

// let and const are block and function scopes


{
    let b = 98;
    const c = 87;
    console.log(b);
    console.log(c); 
}
console.log(b);  // throwns error
console.log(c);   // throwns error



