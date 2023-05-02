'use strict';

const age3 = birthYear => 2023 - birthYear;
console.log(age3(2003));

const yearsUntilRet = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const ret = 60 - age;
    return `${firstName}'s retirment is in ${ret}`;
}

console.log(yearsUntilRet(2003,"Leena"));


const arrowFunction = ()=>{
console.log("hi");
}

arrowFunctio();