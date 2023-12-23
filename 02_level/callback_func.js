// arrow function
const greet = (count) =>{
    for(let i =0;i<count;i++)
    console.log("hello world");
}
greet(3);

// arrow function should store in some variable

const square = (num) => num*num;
square(5);

// *********call back function**********

// a callback function use to passed as an argument to another function

const calculate = (a,b) => {
    return operation (a,b);
}
calculate(3,4);