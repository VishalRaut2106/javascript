const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swipt: 'swipt by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

/***************
 * FOR IN LOOP *
 ***************/
const programming = ["js", 'rb', "python", 'cpp']

for (const key in programming) {
    console.log(`${programming[key]} is the ptogramming languages`);

}


