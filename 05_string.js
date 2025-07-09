const name = "Swapnil"
const repocount = 50

// console.log(name+repocount+"value")

console.log(`Hello my name is ${name} and my repo is ${repocount}`);// backtiks are used here


const gamename = new String ('Swapnil-Sunil-Chikte')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.charAt('l'));


const newString = gamename.substring(0,4)
console.log(newString);

const anotherstring = gamename.slice(-8, -6)
console.log(anotherstring);

const newStringOne = "     Swapnil     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/"
console.log(url.replace('.com','.in'));
console.log(url.includes('google'));
console.log(url.includes('sunder'))


console.log(gamename.split('-'));
