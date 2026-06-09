const nums =[1,2,4,3,5]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    //console.log(element);
    
}
//forEach function iterate to every number in array and perform some opr to each value 
nums.forEach(function(val){
    //console.log(val+ " i'm forEach");
     
})
//map function iterate to every number in array and perform some opr to each value like forEach but stores
// value in new array

const copyNums = nums.map((val)=>{
//    console.log(val*3); 
return val+2
})
console.log(copyNums);

console.log(nums);

