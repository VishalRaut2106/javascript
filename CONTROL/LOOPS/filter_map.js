// const codding = ["js", 'rb', "python", 'cpp', "java"]


// const values = codding.forEach((item) => {
//     console.log(item);
//     return item
    
// })
//     console.log(values);
    



// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const Numbers = myNums.filter((num) => {
//    return num > 4       //return is must
// })


// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// });
// console.log(newNums);




const books = [
    {
    title:'harry potter',genre : 'fiction',publish :2009
    },
    {
    title:'book2',genre : 'science',publish :2010
    },
    {
    title:'book3',genre : 'History',publish :2011
    },
    {
    title:'batman',genre : 'fiction',publish :2004
    },
    {
    title:'book5',genre : 'History',publish :2008
    }
]

let UserBook = books.filter( (bk) => bk.genre === 'fiction')

UserBook = books.filter((bk) => {
    return bk.publish >= 2006  && bk.genre ==='fiction'
})

console.log(UserBook);
