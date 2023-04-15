// test 1 -> true
let johnMass = 92;
let johnHeigh = 1.95;

let markMass = 78;
let markHeight = 1.69;


// test 2 -> False
johnMass = 85;
johnHeigh = 1.76;

markMass = 95;
markHeight = 1.88;


let markMBI = markMass / (markHeight ** 2);
let johnMBI = johnMass / (johnHeigh * johnHeigh);

let markHeightBMI = markMBI > johnMBI;

console.log(markHeightBMI);

if (markMBI > johnMBI) {
    console.log(`Mark's BMI (${markMBI}) is heigher  thank John's`);
}
else{
    console.log(`John's BMI (${johnMBI}) is heigher  thank Mark's`);
}