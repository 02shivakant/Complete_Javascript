const nums = [3,4,5,6,7]
for (const num of nums) {
    //console.log(num);
    
}

const name = "Aman Kumar"
for (const char of name) {
    //console.log(char);
    
}

const mp = new Map();
mp.set("id1",123)
mp.set("id2",654)
for (const key of mp) {
    //console.log(key); 
}
for (const key,value of mp) {
    console.log(key,":",value);
    
}
