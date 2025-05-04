// Array

const  myArray = [0,1,2,3,4,5]
const myHeros = ["Ironman","Thor","Hulk","Antman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArray[1]);

// Array methods

myArray.push(6)    //element added at last
myArray.push(7)    //element added at last
myArray.pop()       //element poped from the last

myArray.unshift(9)      //element added at start
myArray.shift()      //element removed from the start
console.log(myArray);

console.log(myArray.includes(5));       //true
console.log(myArray.indexOf(3));       //3


const newArr =  myArray.join()      //convert it into string
console.log(myArray);
console.log(newArr);


// slice or splice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)    //manipulate the array
console.log(myn2);


// --- Explanatory Notes ---
// Arrays in JavaScript are used to store multiple values in a single variable.
// You can create arrays using square brackets [] or the Array constructor.
// Common methods:
//   - push(): Adds an element to the end.
//   - pop(): Removes the last element.
//   - unshift(): Adds an element to the beginning.
//   - shift(): Removes the first element.
//   - includes(): Checks if an element exists.
//   - indexOf(): Finds the index of an element.
//   - join(): Converts the array to a string.
//   - slice(): Returns a shallow copy of a portion of the array (does not modify original).
//   - splice(): Adds/removes elements and can modify the original array.
//
// --- Advantages ---
// Arrays are versatile, allowing easy storage, access, and manipulation of ordered data.
// Built-in methods make common operations concise and efficient.
// Understanding array methods is fundamental for effective JavaScript programming.

