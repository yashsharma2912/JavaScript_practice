const greet = (count) => {
    // for loop to print hello guys 3 times
    for (let i=0; i<count; i++)
    console.log("hello guys !");
}
// calling arrow function 
greet(3);

const square = (num) => num*num ;
console.log(square(5));

// callback function 
// a callback is a function passed as an argument to another function

const calculate = (a,b, operation ) =>{
    return operation (a,b);
}

const addition = (a,b) => a + b;
// we just passed the addition function
const result = calculate(8,3, addition);

//
