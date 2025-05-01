const accountId = 144553 
let accountEmail = "Vishal@gmail.com"   
var accountpassword = "123455"    
accountCity ="Noida"
let accountState ;          //undefined

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

// accountId = 2        //not allowed

accountEmail ="raut@gmail.com"
accountpassword = "34243"
accountCity = "nashik"


console.table([accountEmail,accountpassword,accountCity,accountState]) //print in table format



/*

OUTPUT:-
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 'raut@gmail.com' │
│ 1       │ '34243'          │
│ 2       │ 'nashik'         │
│ 3       │ undefined        │
└─────────┴──────────────────┘
*/

