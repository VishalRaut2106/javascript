const course = {
    coureeName: "chai aur code",
    price: "3999",
    CourseInsrtuctor: "vishal"
}
// course.CourseInsrtuctor

const{ CourseInsrtuctor : instructor} = course          //  now we can call cousreinstructor as instructor only

console.log(CourseInsrtuctor);

// --- Explanatory Notes ---
// Object destructuring allows you to extract properties from objects and assign them to variables.
// You can rename properties during destructuring for convenience or clarity.
// This technique makes code cleaner and reduces repetition when working with object properties.
//
// --- Advantages ---
// Destructuring improves code readability and reduces boilerplate.
// It is especially useful when dealing with objects with many properties.
// Mastery of destructuring is important for modern JavaScript development.

