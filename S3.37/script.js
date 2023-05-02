'use strict';

const yearsUntilRet = (birthYear) => {
    const age = calAge(birthYear);
    const ret = 60 - age;

    if(ret > 0){
        return ret;
    }
    return -1;
}

const calAge = function (birthYear){
    return 2023 - birthYear;
}

console.log(yearsUntilRet(2003));