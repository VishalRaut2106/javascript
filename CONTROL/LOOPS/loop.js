/*******
 * FOR LOOP *
 *******/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
    // console.log("5 IS BEST NUMBER");
    }
    // console.log(element);
    
}


for (let i = 1; i <=10; i++) {
    //  console.log(`Table Of :${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop :${j}`);
        // console.log(i + "*"+ j + '='+ i*j);  
        
    }
    
}



    /**********************\
    * BREAK AND CONTINUE *
    \**********************/

// for (let i = 1; i < 20; i++) {
//     if (i ==5){
//         console.log(`Detected 5`);
//         break
        // next will not execute work is terminated
//     }
//     console.log(`value of i is ${i}`);
    
// }


for (let i = 1; i < 20; i++) {
    if (i ==5){
        console.log(`Detected  ${i} skipped`);
        continue        //detect then continue ignore
        
    }
    console.log(`value of i is ${i}`);
    
}