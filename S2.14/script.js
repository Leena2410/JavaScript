const now = 2023;

const age = now - 2003;
const agePerson2 = now - 2011;
console.log(age, agePerson2);

console.log(age* 2 , agePerson2 / 10, 2**3);
// 2**3 is 2 to the power of 3

let name1 = "name 1";
let name2 = "name 2"
console.log(name1 + " " + name2);

let x = 10 + 5; //15
x += 10; // x = x + 10

x += 4; // x = x + 4

x++; //x = x + 1
x-- // x = x - 1

console.log(x);

console.log(age > agePerson2); // < > <= >= 
console.log(agePerson2 >= 18);

const isFullAge = agePerson2 >= 18;