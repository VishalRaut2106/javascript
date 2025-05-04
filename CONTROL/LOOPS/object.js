// --- Explanatory Notes ---
// Demonstrates the use of for...in loops to iterate over object properties and array indices in JavaScript.
// for...in loops are used to enumerate keys in objects or indices in arrays.
// Useful for accessing all properties or elements in a collection.
//
// --- Definitions & Usage ---
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swipt: 'swipt by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

/***************
 * FOR IN LOOP *
 ***************/
const programming = ["js", 'rb', "python", 'cpp']

for (const key in programming) {
    console.log(`${programming[key]} is the ptogramming languages`);

}

// --- Advantages ---
// - for...in loops provide a simple way to access all keys in objects or indices in arrays.
// - Useful for dynamic property access and enumeration.
// - Enhances understanding of object and array traversal in JavaScript.


