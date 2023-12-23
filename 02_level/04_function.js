// a function is a block of code that perform specific task

// declaring variable 
const a = 5;
const b = 6;
const c = 4;
const d = 7;
const num = 10;

// declaration of function
 function sum(a,b){
    const sum = a + b;
    console.log(sum);
    return sum;
 }
 const result = sum(a,b);
 console.log(result);

// calling function 
 sum(d,c);
 sum(a,b);

 //function expression 
 const square = function (num){
    const ans = num * num;
    return ans;
 }

 //nested function 
 function addsquare(a,b){
     function square(num){
        return num*num;
     }
     return 0;
 }
 