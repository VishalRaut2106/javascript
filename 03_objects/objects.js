const JsUser = {
  "full_name": "Vishal Devidas Raut",
    name: "vishal",
    age: 19,
    location: "Nashik",
    email: "vishal@gmail.com",
    isloggedIn: false
  }
  console.log(JsUser.email);
  console.log(JsUser.full_name);
  console.log(JsUser["email"]);

  JsUser.email ="vishalraut@gmail.com"    // ! here we can override the  object
  // Object.freeze(JsUser)   // object is freeze next will now it cannot be override
  JsUser.email = "vishalraut@google.com"
console.log(JsUser);

  
JsUser.greeting = function(){
console.log("Hello JS User");
}
JsUser.greeting2= function(){
console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
