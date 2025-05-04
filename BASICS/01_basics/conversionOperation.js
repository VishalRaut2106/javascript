// --- Explanatory Notes ---
// JavaScript allows conversion between types using constructors like Number(), Boolean(), and String().
// Converting non-numeric strings to Number results in NaN (Not a Number).
// Boolean conversion: 1 is true, 0 is false, empty string is false, non-empty string is true.
// String conversion: Converts numbers or other types to string.
// Operations like negation (-value) and string concatenation (+) are common.
//
// --- Advantages ---
// Understanding type conversion helps prevent bugs and unexpected results.
// Explicit conversion is safer than relying on JavaScript's implicit coercion.
// Mastery of conversions is essential for robust data handling.
let score = '44abc'
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);     //NaN

// some issues in conversion
// "44"=> 33
// "44abc" =>NaN
// true =>1  false =>0
// null =>0 
// undefined =>NaN

let isLoggedIn = 1

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 =>true ; 0=> false
// ""=>false
// "vishal"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *******************Operationas**************************

let value = 10
let negValue = -value
console.log(negValue);

let str1 = "vishal"
let str2 = "raut"
let fianal = str1 + str2
console.log(fianal);
