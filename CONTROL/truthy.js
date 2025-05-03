const userEmail = "vishal@gmail.ai"

if (userEmail)
{
    console.log("Got user Email");

    
}else{
    console.log("Don't have user");
    
    }

/**False Values 
 * false , 0 , -0 , BigInt 0n ,  "" , null , undefined , NaN ,
 * 
 * Truthy Values
 * "0" , 'false' , " " , [] , {},  function(){} //empty function
 * 
 */

// Nullish Coalscing Operator (??): null  undefined


// let val1;
// val1 = 5 ?? 10           //5
// val1 = null ?? 10           //10 
// val1 = undefined ?? 15      //15
// val1   =  null ?? 10 ??15       //10
// val1 = null ?? undefined        //undefined


// console.log(val1);

// Terniary Operator
// condition ? true : false

// const IcePrice  = 100
// IcePrice <= 80 ? console.log("less than 80") : console.log("more than 80");


