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

