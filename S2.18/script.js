const age = 15;

//const isOldEnough = age >= 18; // boolean

if (age >= 18) {
    console.log(`Is old enough`);
}
else{
    console.log(`Is NOT old enogh`);
    const yearsLeft = 18 - age;
    console.log(`${yearsLeft} more years`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}

console.log(century);