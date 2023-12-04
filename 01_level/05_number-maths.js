const key = 123 
// by default it will take it as a number datatype

const key2 = new Number(321)
// but once declare it as a number datatype then it will strictly follow it

console.log(key.toString());

//********************************//
// math is the object based library in javascript

console.log(Math);
console.log(Maths.round(5.6)); // remove the decimals 
console.log(Maths.floor(5.3));  // same 
console.log(Math.random()); // generate random value 

// exercise generate random no. // 

const min = 10
const max = 20 
 console.log(Math.floor(Math.random()*(max-min+1))+min);