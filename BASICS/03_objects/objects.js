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

// --- Explanatory Notes ---
// Objects in JavaScript are collections of key-value pairs used to store structured data.
// Properties can be accessed with dot notation or bracket notation.
// Objects are mutable; properties can be added, changed, or deleted.
// Methods (functions attached to objects) can use 'this' to refer to the object itself.
// Object.freeze() prevents further modification of an object.
//
// --- Advantages ---
// Objects allow grouping related data and behavior, making code organized and modular.
// They are fundamental for representing real-world entities and for OOP in JavaScript.
// Mastery of objects is essential for effective JavaScript programming.
