// --- Explanatory Notes ---
// Demonstrates the use of for...of loops for iterating over arrays, strings, and Maps in JavaScript.
// for...of loops allow direct access to values of iterable objects.
// Useful for processing elements, characters, or key-value pairs without manual indexing.
// Also covers Map structure and its iteration.
//
// --- Definitions & Usage ---
/**********
 * FOR OF *
 **********/

// for (const element of object) {
    
// }
const arr = [1,2,3,4,5,6,]

for (const num of arr) {
 //   console.log(num);
    
}
/**
1
2
3
4
5
6 */


const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}
/**each char is h
each char is e
each char is l
each char is l
each char is o
each char is
each char is w
each char is o
each char is r
each char is l
each char is d */



/*******
 * MAP *
 *******/
// hold in key- value pair
// values is  unique


const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);


for (const [key , value] of map) {
    // console.log(key  ,' : ' , value);
    
}

const myObject = {
     'game1' : 'NFS',
     'game2' : 'spiderman'
}
// for (const [key ,value] of myObject) {
//     // console.log(key, ' : ', value);
// }
// --- Advantages ---
// - for...of loops provide a clean way to iterate over values in arrays, strings, and other iterables.
// - Map iteration allows easy access to key-value pairs.
// - Improves code readability and reduces errors from manual indexing.