const score = 400
console.log(score);             //400

const balance = new Number(100)
console.log(balance);           //[Number: 100]


//if we convert the number into string we have can apply all the properties of string on it
console.log(balance.toString().length);     //3
console.log(balance.toFixed(2));     //100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(8));        //123.89660


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));      //10,00,000



console.log('----------------------------------------------------');

// +++++++++++++++    MATHS+++++++++++

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




