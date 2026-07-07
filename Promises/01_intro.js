const promiseOne = new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log("This is first Promise");
        resolve();
        
    },1000)
})
promiseOne.then(()=>{
    console.log("This is promise consume");
    
})

//===============================================<>=======================

new Promise((resolve  , reject)=>{
    setTimeout(function(){
        console.log("This is the second Promise..");
        resolve();
    },3000)
    
}).then(function(){
    console.log("This is shorthand to consume Promise");
    
})