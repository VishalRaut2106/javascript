const accountId = 144553 
let accountEmail = "Vishal@gmail.com"   
var accountpassword = "123455"    
accountCity ="Noida"
let accountState ;          //undefined

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

// accountId = 2        //not allowed

accountEmail ="raut@gmail.com"
accountpassword = "34243"
accountCity = "nashik"


console.table([accountEmail,accountpassword,accountCity,accountState]) //print in table format



/*

OUTPUT:-
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 'raut@gmail.com' │
│ 1       │ '34243'          │
│ 2       │ 'nashik'         │
│ 3       │ undefined        │
└─────────┴──────────────────┘
*/

// --- Explanatory Notes ---
// Variables in JavaScript can be declared using var, let, or const.
// const: Block-scoped, cannot be reassigned, must be initialized.
// let: Block-scoped, can be reassigned, can be declared without initialization.
// var: Function-scoped, can be reassigned, avoid using due to scope issues.
// Uninitialized variables declared with let are undefined.
// Use console.table() to display data in a tabular format for better readability.
//
// --- Advantages ---
// Using let and const helps prevent bugs related to variable scope and reassignment.
// const ensures values meant to remain constant are protected.
// Understanding variable scope is essential for writing predictable, maintainable code.

