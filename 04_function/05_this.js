const user ={
    username: "shiva",
    id : 2354,
    greeting : function(){
        console.log(`${this.username} , you are welcome!!`);
        console.log(this);
        
        
    }
}
// user.greeting()
user.username = "Anisha"
user.greeting()