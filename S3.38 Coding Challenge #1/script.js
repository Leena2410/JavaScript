'use strict';

let Davg , Kavg;

const D1 = 85;
const D2 = 54; 
const D3 = 41;

const K1 = 23;
const K2 = 34;
const K3 = 27;

const calavg = (a, b, c) => (a + b + c) /3;

Davg = calavg(D1, D2, D3);
Kavg = calavg(K1, K2, K3);

checkWinner(Davg, Kavg);

function checkWinner(avgDolphins , avgKoalas) {
    if(avgDolphins >= 2*avgKoalas){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`); 
    }
    else{
        console.log("No Winner");
    }
}