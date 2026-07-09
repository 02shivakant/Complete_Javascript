function shadow() {
    let var_name = "Morning";

    if(true){
        let var_name = 'Night'   //shadowing
        console.log(var_name);
        
    }
    console.log(var_name);

}
shadow()

//Illegal Shadowing

function shadow2() {
    let a = "ram";
    var b = "shaym";

    if(true){
        let b = 'raju';   //shadowing
        var a = ' shyama';   // Illegal shadowing  show error
        console.log(a);
        
    }
    console.log(var_name);

}
shadow2()
//==============================<>============================================

// Hoisting is something which is only followed by let and const not with var 
// var can  shows undefned without intiallisation
