// singleton --> if made by constructor 

// object literals 

const jsUser = {
    name : "yash",
    age : 18,
    city : "pune",
    married : false,
}
// access object
// always define key value in " " double quotes inside the square bracets
console.log(jsUser["name","age"]);
console.log(jsUser.city); //---> not much effective way 
 
// over-riding objects key value !

jsUser.name = "om khulbe";
console.log(jsUser["name"]) 

//symbol --->premative datatype
 // [name] : "yash"; by default it key of an object will take string value

 