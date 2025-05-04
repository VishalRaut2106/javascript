// --- Numbers and Math in JavaScript ---
// Numbers in JavaScript can be created as literals or using the Number object.
// Useful properties and methods include toString(), toFixed(), toPrecision(), and toLocaleString().
// These allow formatting and converting numbers for various purposes.
const score = 400
console.log(score);             //400

const balance = new Number(100)
console.log(balance);           //[Number: 100]

// If we convert the number into a string, we can apply all string properties on it
console.log(balance.toString().length);     //3
console.log(balance.toFixed(2));     //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(8));        //123.89660

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));      //10,00,000

// --- Advantages ---
// JavaScript provides flexible ways to handle and format numbers for display and calculations.
// Methods like toFixed, toPrecision, and toLocaleString are useful for rounding, formatting, and localization.

console.log('----------------------------------------------------');

// +++++++++++++++    MATHS+++++++++++
// The Math object provides mathematical constants and functions.
console.log(Math);

console.log(Math.abs(-4));       // 4   :- only convert  -ve into +ve 
console.log(Math.round(4.3));           //4
console.log(Math.ceil(4.3));           // 5
console.log(Math.floor(4.9));           //4
console.log(Math.sqrt(81));             //9

console.log(Math.min(4,6,8,9,3));  //3            
console.log(Math.max(4,6,8,19,3));  //9            

// random  :always gives the value between 0 and  1
let random = (Math.floor(Math.random()*10)+1);
console.log(random);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min);   // between range 10 and 20

// --- Explanatory Notes ---
// Math methods are essential for calculations, rounding, and generating random numbers.
// Math.abs(): Absolute value, Math.round(): Nearest integer, Math.ceil(): Rounds up, Math.floor(): Rounds down, Math.sqrt(): Square root.
// Math.min()/Math.max(): Find minimum/maximum in a set.
// Math.random(): Generates a pseudo-random number between 0 and 1.
// Combining Math.random() with Math.floor() allows for random integer generation within a range.
// --- Advantages ---
// The Math object simplifies complex calculations and randomization, making JavaScript powerful for numeric and statistical tasks.




