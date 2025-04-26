const name  = "Vishal"
const repoCount = 50

// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String ('vishal-raut')
console.log(gameName[1]);           // i
console.log(gameName.__proto__);    //{, , , , , , , ,}
console.log(gameName.length);       //10 length of the string
console.log(gameName.toUpperCase());        //VISHALRAUT
console.log(gameName.charAt(4));            //a
console.log(gameName.indexOf('r'));          //7  
console.log(gameName.split('a'));           //[ 'vish', 'l-r', 'ut' ]




const NewGame = gameName.substring(0,4)
console.log(NewGame);                       //vish   start => end-1


const anotherString = gameName.slice(4,7)
console.log(anotherString);


// trim = trimstart, strimend
const  spaceString = "     vishal   "
console.log(spaceString);               // _____vishal______
console.log(spaceString.trim());        //vishal

// replace
const url = "https://vishal.com/vishal%30raut"
console.log(url.replace('%30','-'));            //https://vishal.com/vishal-raut
console.log(url.includes('vishal'));            //true    (it is present or not)






       
