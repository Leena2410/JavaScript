'use strict';

// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [];
const total = [];

function calcTip(bill) {
    let tip;
    if(bill < 300 && bill > 50){
        tip = 0.2;
    }
    else{
        tip = 0.15;
    }

    //const val = bill + (bill * tip);

    return tip*bill;
}

tips[0] = calcTip(bills[0]);
total[0] = tips[0] + bills[0];
console.log(total[0]);

tips[1] = calcTip(bills[1]);
total[1] = tips[1] + bills[1];
console.log(total[1]);

tips[2] = calcTip(bills[2]);
total[2] = tips[2] + bills[2];
console.log(total[2]);