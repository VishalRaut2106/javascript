const user = {
    userName: "Vishal",
    price: 999,

    welcomeMessage: function () {       // this => current context (Values) ko refer krta hai
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);
        
    }


}
user.welcomeMessage()
user.userName = "jon"
user.welcomeMessage()



function Chai(){
    let user = "vishal"
    console.log(this.user);
    
}
const Chai2 = () => {
    let user = "vishal"
    console.log(this);
    
}






Chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
//     }


/*******************
 * IMPLECET RETURN *
 *******************/
/** if you use the parameter within the curly brasec you have to use return  statement 
 * if you use parantheses you dont need to use return keyword
 */

// const addTwo = (num1,num2) =>  num1+num2
const addTwo = (num1,num2) =>  (num1+num2)
    

    console.log(addTwo(3,4));
    
