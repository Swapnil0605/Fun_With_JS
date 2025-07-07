// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null ==0);
console.log(null >=0);

// here the output of (null >=0) is different
// the reason is that an eqality check == and comparisions > , < , >= , <= work differntly.
// comparisions convert null to a number , treating it as 0.
// that's why 3) null >= 0 is true and 1) null > o is false</>

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0)// should always avoid the use of null and undefined as it creates more complexity


// === (use?? here it checks teh datatype also)
console.log("2" === 2 );


