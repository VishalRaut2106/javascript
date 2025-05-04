// --- Arrow Functions in JavaScript ---
// Arrow functions provide a shorter syntax for writing functions and do not have their own 'this' context.
const user = {
    userName: "Vishal",
    price: 999,

    welcomeMessage: function () {       // Regular function: 'this' refers to the current object
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);
        
    }


}
user.welcomeMessage()
user.userName = "jon"
user.welcomeMessage()


// Regular function: has its own 'this' (depends on how it's called)
function Chai(){
    let user = "vishal"
    console.log(this.user); // 'this' refers to global object or undefined in strict mode
    
}
// Arrow function: does NOT have its own 'this', inherits from parent scope
const Chai2 = () => {
    let user = "vishal"
    console.log(this); // 'this' here is not the function's own context
    
}









Chai()


// Arrow function with explicit return
// const addTwo = (num1,num2) => {
//     return num1+num2
//     }


/*******************
 * IMPLICIT RETURN *
 *******************/
/** If you use curly braces, you must use the return statement.
 * If you use parentheses, return is implicit (no need to write return keyword).
 */

// const addTwo = (num1,num2) =>  num1+num2
const addTwo = (num1,num2) =>  (num1+num2)
    
    console.log(addTwo(3,4));
    

// --- Advantages of Arrow Functions ---
// 1. Shorter syntax for writing functions.
// 2. Do not bind their own 'this', making them useful for callbacks and methods where lexical 'this' is desired.
// 3. Cannot be used as constructors (cannot use 'new' with them).
// 4. Useful for concise one-liners and functional programming patterns.
    
