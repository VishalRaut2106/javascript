// --- Explanatory Notes ---
// Demonstrates the use of forEach to iterate over array elements in JavaScript.
// forEach executes a provided function once for each array element.
// The callback receives the current item, its index, and the array itself.
// Useful for performing actions on each element without returning a new array.
//
// --- Definitions & Usage ---
const codding = ["js", 'rb', "python", 'cpp',"java"]

// codding.forEach( function (item) {
//     console.log(item);
//     })

codding.forEach((item , index ,arr) => {
    console.log(item ,index , arr);
    
})

// js 0 [ 'js', 'rb', 'python', 'cpp', 'java' ]
// rb 1['js', 'rb', 'python', 'cpp', 'java']
// python 2['js', 'rb', 'python', 'cpp', 'java']
// cpp 3['js', 'rb', 'python', 'cpp', 'java']
// java 4['js', 'rb', 'python', 'cpp', 'java']
// --- Advantages ---
// - forEach provides a concise way to process each element in an array.
// - It improves code readability and avoids manual indexing.
// - Useful for side effects like logging or updating external variables.