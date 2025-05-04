// --- Immediately Invoked Function Expression (IIFE) ---
// An IIFE is a function that runs as soon as it is defined.
// It creates a private scope, avoiding polluting the global namespace and preventing variable conflicts.
// Syntax: (function(){ /* code */ })();
// Useful for initialization code and encapsulation.
// --- Advantages ---
// 1. Prevents global scope pollution.
// 2. Useful for module patterns and data privacy.
// 3. Runs code immediately without explicit invocation.

(function chai (){              
    // named IIFE
    console.log(`DB CONNECTED`);
    
    })();
    // semicolon is must


((name)=>{
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`) } )('vishal')    	    // global scope ke polution se bachane keliye