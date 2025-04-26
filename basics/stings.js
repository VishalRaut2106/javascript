const name  = "Vishal"
const repoCount = 50

// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('vishalraut')
console.log(gameName[1]);           // i
console.log(gameName.__proto__);    //{, , , , , , , ,}
console.log(gameName.length);       //10 length of the string
console.log(gameName.toUpperCase());        //VISHALRAUT
console.log(gameName.charAt(4));            //a
console.log(gameName.indexOf('r'));          //6  


const NewGame = gameName.substring(0,4)
console.log(NewGame);                       //vish   start => end-1


const anotherString = gameName.slice(4,7)
console.log(anotherString);

const  spaceString = "     vishal   "
console.log(spaceString);               // _____vishal______
console.log(spaceString.trim());        //vishal



       
