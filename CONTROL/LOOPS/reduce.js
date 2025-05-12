const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => { return num +10})


const newNums = myNums
                .map((num) => num * 10)
                .map(( num)=>num +1 )
                .filter((num)=> num>=40)

// console.log(newNums);



// ! ||--------------------------------------------------------------------------------||
// ! ||                                     reduce                                     ||
// ! ||--------------------------------------------------------------------------------||/

//user supplied reducer

const numbers = [1,2,3]

// const total = numbers.reduce(function (acc, currentvalue) {
//     console.log(`acc ${acc} and currentvalue ${currentvalue}`);
    
//     return acc + currentvalue
// }, 0)
 
//  const total = numbers.reduce((acc , currval)=> acc+currval , 0)
// console.log(total);



const ShopingCart = [
    {
        itemName: 'js course',
        price : 999
    },
    {
        itemName: 'pyhton course',
        price : 5999
    },
    {
        itemName: 'java course',
        price : 9999
    },
    {
        itemName: 'data science course',
        price : 12999
    },
    {
        itemName: 'mobile dev course',
        price : 4999
    }
]

const priceToPay = ShopingCart.reduce((acc , item)=>acc + item.price,0)

console.log( priceToPay);
