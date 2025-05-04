
// ! Scope Types in JavaScript with Examples
/**************
 ! {} = SCOPE *
 **************/

// 1. Global Scope
// A variable declared outside all functions or blocks.
// It can be accessed anywhere in the code.
// Definition: Global scope means the variable is accessible from anywhere in the script.
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible

// 2. Function Scope
// Variables declared with var, let, or const inside a function are only accessible within that function.
// Definition: Function scope restricts variable access to the function in which it is declared.
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
// Definition: Block scope limits variable access to the block (within curly braces) where it is defined.
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

// ---
// Advantages of Understanding Scope in JavaScript:
// 1. Prevents accidental variable overwrites and bugs by controlling variable visibility.
// 2. Helps in writing modular and maintainable code.
// 3. Reduces global namespace pollution, especially with block and function scope.
// 4. Enables better memory management by limiting variable lifetime.



