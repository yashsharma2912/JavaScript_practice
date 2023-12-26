// step 1 we created a promise
// there are 3 states in promise pending,resolve,rejected
// promise should be declared with new keyword

const ticket = new Promise(function(resolve,rejected) {
    const isBoarded = false;
    if(isBoarded){
        resolve('you are not in the flight');
    } else{
        reject("your flight has been cancelled")
    }
})

// we are calling to the promise

// then will return only true statement
 ticket.then((data) => {
    console.log("wohoo",data);
 })
 // catch will return only false statement
 .catch((data) => {
    console.log("oh no", data);
 })

 // finally will will return passed statement weather it is true or false
 .finally (() =>{
    console.log("i will always be executed");
 });
