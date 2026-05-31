// function display(){
//     console.log(this);
    
// }
// display()  ==> this will run 
// function display2(){
//     let user = " shiva"
//     console.log(this.user);
    
// }
// display2()  => this will display undefined


// and here arrow function comes in picture that to run program in function we need to craete 
// arrow function 

const arrowFunctionn = () => {
    let user = "mayank "
    console.log(this);
    
}
arrowFunctionn()

const add1 = (a , b ) =>{
    return a+b
}
console.log(add1(4,6));

const add2 = (a , b ) => {return a+b}
console.log(add2(4,6));

const add3 = (a , b ) => a+b
console.log(add3(4,6));

const add4 = (a , b ) => (a+b)
console.log(add4(4,6));

const objPrint = () => ({username:"shiva"})
console.log(objPrint());


