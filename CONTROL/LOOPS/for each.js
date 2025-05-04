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