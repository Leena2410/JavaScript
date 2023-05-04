'use strict';
let rep =0;
// while (rep <= 10) {
//     console.log(`========== ex ${ex}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);        
//     }   
//     rep++; 
// }

let dic = Math.trunc(Math.random() *6 + 1 ) ;
while (dic != 6) {
    console.log(dic);
    dic = Math.trunc(Math.random() *6 + 1 ) ;
    if (dic == 6) {
        console.log("final value: 6");
    }
}