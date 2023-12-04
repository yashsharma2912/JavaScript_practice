// array
// array must be write in square barracks []

const myArr =  [0,1,2,3,4,5]

const myHeros = ["yash","atharva","om"]

console.log(myArr[0]);

// array methods  

//pop() delete element from arrya 
//push() add leement in the end
//unshift() add element in the start of arrays
//shift()  remove element from the start of the array
//myArr.indexOf(valid no. from array)
//myArr.includes(valid no. from array)
// join() ===> convert array into string datatype

console.log(myArr);
//**************************************//

// slice, splice

const marvel = ["thor","hulk","ironman"]
const dc = ["batman","flash","superman"]

marvel.push(dc);
console.log(marvel); // it will push array into array

marvel.concat(dc); // output will be same as push(); 
// concat will return a new array 

//spread operator ---> use to spread arrays 
const spread_array = [...marvel, ...dc]

//**********************************************//
//example for spread

const another_array = [1,2,3,[4,5,6],7,[4,5]] ; 
const real_array = another_array.flat(infinity);

console.log(real_array);

//------------------------------------------------//

console.log(Array.isArray("yash")) // ---> use to check it is array or not
//output will be false

console.log(Array.from("yash"))
// it will convert string into array and expected output is !
// ['y','a','s','h']

let num1 = 25;
 let num 2 = 35;
 let num3 = 45;

 console.log(Array.of(num1,num2,num3));

 //-------------------------------------------------//



