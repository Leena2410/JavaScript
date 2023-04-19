/*  Falsy Values
0 
empty string
undefined 
null
NaN
*/

console.log(Boolean(0));
console.log(Boolean("String"));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Dont spend it all");
}
else{
    console.log("GET A JOB!!");
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}
