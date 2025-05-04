// --- Explanatory Notes ---
// JavaScript's Date object allows you to work with dates and times.
// You can create dates using different formats (current date, specific date, or timestamp).
// Common methods:
//   - toString(), toISOString(), toLocaleDateString(), toLocaleString(), toLocaleTimeString() for formatting.
//   - getTime(), getMinutes(), getDate(), getFullYear() for extracting parts of the date.
//   - Date.now() gives the current timestamp in milliseconds.
//   - Math.floor(Date.now()/1000) gives the current timestamp in seconds.
//   - toLocaleString() can be customized with options for localization.
//
// --- Advantages ---
// The Date object provides powerful tools for handling and formatting dates and times.
// Understanding date methods helps with scheduling, logging, and user interfaces.
// Localization options make it easy to display dates in user-friendly formats.
// --- End of Explanatory Notes ---
let myDate = new Date()
console.log(myDate.toString());             //Sun Apr 27 2025 00:08:17 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());             //2025-04-26T18:38:17.067Z 
console.log(myDate.toLocaleDateString());           //27/4/2025
console.log(myDate.toLocaleString());               //27/4/2025, 12:08:17 am
console.log(myDate.toLocaleTimeString());           //12:08:17 am
console.log(typeof myDate);                 //object

// let mycreatedDate = new Date(2024,0,23)      //Tue Jan 23 2024

// let mycreatedDate = new Date(2024,0,23,5,3)     //23/1/2024, 5:03:00 am

// let mycreatedDate = new Date("2024-03-14")     //14/3/2024, 5:30:00 am

let mycreatedDate = new Date("01-14-2023")     //MM/DD/YY : 14/1/2023, 12:00:00 am
console.log(mycreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));           //1745693378

let newDate =new Date()
console.log(newDate.getMinutes());
console.log(newDate.getDate());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday:"long",
})

