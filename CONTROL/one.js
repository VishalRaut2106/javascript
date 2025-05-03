/******
 * IF
 * if condition true then  code execute *
 * if condition False then  code !execute *
 ******/
//   <,>,<=,>=,==,!=,===,!==

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