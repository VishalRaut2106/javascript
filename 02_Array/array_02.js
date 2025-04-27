const marvelHeros = ["Thor","Ironman","Spiderman"]
const DCHeros = ["Batman","SuperMan","Flash"]

// marvelHeros.push(DCHeros)
// console.log((marvelHeros));
// console.log((marvelHeros[3][1]));


const allHeros = marvelHeros.concat(DCHeros)
console.log(allHeros);          //[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'SuperMan', 'Flash' ]

// Spread Operator : ...
const allNewHeros = [...marvelHeros,...DCHeros]
console.log(allNewHeros);           //[ 'Thor', 'Ironman', 'Spiderman', 'Batman', 'SuperMan', 'Flash' ]


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);      //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));          // ! convert into the ARRAY  [ 'V', 'i', 's', 'h', 'a', 'l' ]
console.log(Array.from({name:"Vishal"}));  

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));        // [ 100, 200, 300 ]



