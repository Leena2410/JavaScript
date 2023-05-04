'use strict';
const Leena = [
    'Leena',
    2003,
    'Students',
    ['friend 1', 'friend 2'], //I'm not the most extroverted person
    false,
];
for (let i = Leena.length - 1 ; i >=0 ; i--){
    console.log(Leena[i]);
}

for (let ex = 1; ex < 4; ex++) {
    console.log(`========== ex ${ex}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);        
    }    
}