,, ,  'use strict';
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [, ];

function calctip() {
    for (let i = 0; i < bills.length; i++) {
        if(bill[i] > 50 && bill[i] < 300){
            tips[i] = 0.02;
        }
        else{
            tips[i] = 0.015;
        }
        total[i] = tips[i] + bills[i];
    }
}