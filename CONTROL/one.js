// --- Explanatory Notes ---
// Demonstrates the use of if statements, logical operators, and scope in JavaScript.
// if statements execute code blocks based on conditions being true or false.
// Logical operators (&&, ||) combine multiple conditions.
// Scope determines variable accessibility within code blocks.
// Useful for decision making and controlling program flow.
//
// --- Definitions & Usage ---
/******
 * IF
 * if condition true then  code execute *
 * if condition False then  code !execute *
 ******/
//   <,>,<=,>=,==,!=,===,!===

// const isUserLoggedIn = true
// const temperature = 40


// if(temperature === 4){
// console.log("less than 50");

// }
// else{
// console.log("temp is greater than 50");
// }

/*********
 * SCOPE *
 *********/

// const score = 200

// if (score >100)
// {
//     let power = "fly"
//     console.log(`user power ${power}`);
    
// }

// const balance = 1000
// // if (balance  > 500)console.log("test");         //implicit scope

// if(balance < 500)
// {
//     console.log("less than");
    
// }else if(balance<750){
//         console.log("less than 750");
        
//     }else{
//         console.log("less than 1200");
        
//     }


const isUserLoggedIn = true
const debitcard = true
const logginFromGoogle = false
const logginFromEmail = true

if (isUserLoggedIn && debitcard)
{
    console.log("allow to course");
    
}
if (logginFromEmail ||logginFromGoogle) {
    console.log("user Logged in");
}
// --- Advantages ---
// - if statements and logical operators enable dynamic decision making in code.
// - Understanding scope prevents variable conflicts and bugs.
// - Mastery of control flow is essential for robust, maintainable programs.