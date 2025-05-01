
// ! Scope Types in JavaScript with Examples
// ! ||--------------------------------------------------------------------------------||
// ! ||                                   {} = scope                                   ||
// ! ||--------------------------------------------------------------------------------||

// 1. Global Scope
// A variable declared outside all functions or blocks.
// It can be accessed anywhere in the code.
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible

// 2. Function Scope
// Variables declared with var, let, or const inside a function are only accessible within that function.
function functionScopeExample() {
    var functionVar = "I am function scoped (var)";
    let functionLet = "I am function scoped (let)";
    const functionConst = "I am function scoped (const)";
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible
}
functionScopeExample();
// console.log(functionVar); // Error: not defined
// console.log(functionLet); // Error: not defined
// console.log(functionConst); // Error: not defined

// 3. Block Scope
// Variables declared with let and const inside a block (e.g., if, for) are only accessible within that block.
if (true) {
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    var blockVar = "I am NOT block scoped (var)";
    console.log(blockLet); // Accessible
    console.log(blockConst); // Accessible
    console.log(blockVar); // Accessible
}
// console.log(blockLet); // Error: not defined
// console.log(blockConst); // Error: not defined
console.log(blockVar); // Accessible (var is function/global scoped)


