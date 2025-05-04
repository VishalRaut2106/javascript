// --- Explanatory Notes ---
// This file demonstrates various array operations and methods in JavaScript.
// Arrays are used to store multiple values in a single variable.
// Key concepts covered: concat, spread operator, flat, Array.isArray, Array.from, Array.of.
//
// --- Definitions & Usage ---
const marvelHeros = ["Thor","Ironman","Spiderman"] // Array of Marvel heroes
const DCHeros = ["Batman","SuperMan","Flash"]      // Array of DC heroes

// .push() can add an array as a single element, resulting in a nested array:
// marvelHeros.push(DCHeros)
// console.log((marvelHeros)); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Batman', 'SuperMan', 'Flash' ] ]
// console.log((marvelHeros[3][1])); // Accessing 'SuperMan' from nested array

// .concat() merges arrays and returns a new array (does not modify originals):
const allHeros = marvelHeros.concat(DCHeros)
console.log(allHeros);          // [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'SuperMan', 'Flash' ]

// Spread Operator (...) expands elements of arrays, useful for merging:
const allNewHeros = [...marvelHeros,...DCHeros]
console.log(allNewHeros);           // [ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'SuperMan', 'Flash' ]

// .flat() flattens nested arrays into a single array. Infinity flattens all levels:
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);      // [1,2,3,4,5,6,7,6,7,4,5]

// Array.isArray() checks if a value is an array:
console.log(Array.isArray("Vishal")); // false
// Array.from() creates an array from iterable or array-like objects:
console.log(Array.from("Vishal"));          // [ 'V', 'i', 's', 'h', 'a', 'l' ]
// If passed an object, returns an empty array unless object is array-like:
console.log(Array.from({name:"Vishal"}));  // []

let score1 = 100
let score2 = 200
let score3 = 300
// Array.of() creates a new array from arguments:
console.log(Array.of(score1,score2,score3));        // [ 100, 200, 300 ]

// --- Advantages ---
// - concat and spread operator allow easy merging of arrays without mutation.
// - flat simplifies working with deeply nested arrays.
// - Array.from and Array.of provide flexible ways to create arrays from different sources.
// - Understanding these methods improves code readability and efficiency.



