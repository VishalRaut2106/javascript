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

