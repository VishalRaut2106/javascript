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