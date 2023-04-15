const now = 2023;

console.log(now - 1991 > now - 2018);

/********** Does the opetations befor the comparision ******** */

console.log(25 - 10 - 5);

let x, y; //Undefined

x = y = 25 - 10 - 5; // y -> 10 ; x -> y -> 10;
console.log("x: " + x);

y = 5 - 10 - 25;
console.log("Y: " + y);

const age1 = now - 1991;
const age2 = now - 2018;

const avgAge = (age1 + age2) / 2; // 1-> /; 2-> +

console.log("1 " + age1);
console.log("2 " + age2);
console.log(avgAge);