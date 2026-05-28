
var c = 300
if (true) {
    let a = 2
    const b = 6
    var c = 8
    console.log("INNNER a is :" ,  a);
    
}
let a = 4
console.log("Outer a is :",a);

// console.log(a);   => this will show error
//   console.log(b);  => this will show error
console.log(c);    // this is print because it has javascript issue  also the above value is not printing 



