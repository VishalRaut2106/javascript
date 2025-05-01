// ! ||--------------------------------------------------------------------------------||
// ! ||                                    Function                                    ||
// ! ||--------------------------------------------------------------------------------||

function SayMy_Name() {
  console.log("V");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("L");
}

// SayMy_Name()

//parameters
// function AddNumbers (num1,num2){
//    console.log( num1 + num2);

// }

// function AddNumbers(num1, num2) {
//   // let result = num1 + num2
//   // return result
//   console.log(`the sum of ${num1} and ${num2} is `);
//   return num1 + num2;
// }
// const result = AddNumbers(3, 4);

// console.log("result:",result);


function loginUserMessage(username ="jon") {            //if no user logged in the jon will default

    if (!username){                         //  !username = username ===undefined
        console.log("Please enter a username");
        return
    }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Vishal"));    //user
