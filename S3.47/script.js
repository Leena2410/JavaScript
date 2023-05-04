'use strict';


const Leena = [
    'Leena',
    2003,
    'Students',
    ['friend 1', 'friend 2'], //I'm not the most extroverted person
    false,
];

const type = [];

for (let i = 0; i < Leena.length; i++) {
    console.log(Leena[i] , typeof(Leena[i]));
    //type[i] = typeof(Leena[i])
    type.push(Leena[i]);
}

const years = [2000, 2001, 2002, 2003, 2004, 2005];
const ages = [];
for (let i = 0; i < years.length; i++) {
    console.log(2023 - years[i]);   
    ages.push(2023 - years[i]) ;
}

console.log('==========================');

for (let i = 0; i < Leena.length; i++) {
    if (typeof(Leena[i]) != 'string') {
        continue;
    }
    console.log(Leena[i] , typeof(Leena[i]));
    
}

console.log('=================');

for (let i = 0; i < Leena.length; i++) {
    console.log(Leena[i] , typeof(Leena[i]));
    if (typeof(Leena[i]) == 'number') {
        break;
    }
    
    
}