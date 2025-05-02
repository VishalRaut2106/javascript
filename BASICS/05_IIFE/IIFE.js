// Immediately Invoked Function Expression (IIFE)
/** An IIFE(Immediately Invoked Function Expression) is a function in JavaScript that 
 * runs as soon as it is defined.It's mostly used for creating a private scope, 
 * which helps in avoiding polluting the global namespace and preventing variable conflicts.*/

(function chai (){              
    // named IIFE
    console.log(`DB CONNECTED`);
    
    })();
    // semicolon is must


((name)=>{
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`) } )('vishal')    	    // global scope ke polution se bachane keliye