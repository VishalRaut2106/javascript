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
