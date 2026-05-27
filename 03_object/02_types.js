 // two types are : 1. singleton , 2. objects lietrals


//  const userId = new Object()          --->  this is singleton object 

const userId = {}               // ------------> this is literal object
userId.id = " 2321asc";
userId.name = "shiva";
userId.isLog ="false";

const newUser ={
    id : 23442,
    employeId:{
        personalDetails:{
            firstName : " shiva",
            lastName : "pandey "
        }
    }
}

console.log(newUser)