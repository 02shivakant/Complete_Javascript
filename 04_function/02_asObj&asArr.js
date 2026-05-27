// function multipleParams(num1){
//     return num1;
// }
// console.log(multipleParams(100,200,300));    => only single character will display

// using rest / spread operator (...) we can display multiple params

function multipleParams(...num1){
    return num1;
}
console.log(multipleParams(100,200,300));

function multipleParams2(var1,var2,...num1){
    return num1;
}
console.log(multipleParams2(100,200,300));

const user = {
    username : "shiva",
    id: "1234"
}
function newFun(anyvalue){
    console.log(`name is ${anyvalue.username} and price is ${anyvalue.id}`);
    
}
newFun(user)
// same goes with array 