// --- Explanatory Notes ---
// JavaScript supports primitive (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and non-primitive/reference types (Array, Object, Function).
// typeof operator helps determine the type of a variable.
// null is an object (quirk of JavaScript), undefined means a variable is declared but not assigned.
// Arrays, objects, and functions are reference types and stored in the heap; primitives are stored in the stack.
// Stack (primitive): changes affect only the copy, not the original.
// Heap (non-primitive): changes affect the original object.
//
// --- Advantages ---
// Understanding data types is crucial for memory management and bug prevention.
// Knowing the difference between stack and heap helps avoid unintended side effects.
// typeof operator is useful for debugging and type checking.
let name = "vishal"
let age = "19"
let isLoggedIn = false  
//number =>  2 to power 53
//bigint 
// string=>"",''
// boolean => true/false
// null => stand alone value
// undefined => not declared
// symbol => unique
// object
console.log(typeof "vishal");       //string  
console.log(typeof age);            //variable
console.log(typeof null);           //null is an object
console.log(typeof undefined);      //undefined




/*
primitive
7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt
*/
 
/*
Non-primitive/Reference
 Array ,Object,Function
*/
const heros = ["shaktiman","Krish" ,"doga"]
let Object = {
     name :"vishal",
     age : 19,

}
const myFunction = function(){
    console.log("Hello world");
    
}
console.log(typeof heros);
//Stack (Primitive), =>change occure in the copy OG remain same
//  Heap(Non-Primitive) => changes in the OG 
// --- End of Explanatory Notes ---
let MyfullName = "VishalDevidasRaut"

let Name = MyfullName

Name = "Vishalraut"

console.log(MyfullName);

console.log(Name);




let User1 = {
    email: "user@google.com",
    upi: "user@ybl"
}
let User2 = User1
  User2.email= "vishal@google.com"


console.log(User1.email);
console.log(User2.email);
// the main also changed
