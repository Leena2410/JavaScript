let Davg, Kavg;

const d1 = 96;
const d2 = 108;
const d3 = 89;
Davg = (d1 + d2 + d3)/3;

const k1 = 88;
const k2 = 91;
const k3 = 110;

Kavg = (k1 + k2 + k3) / 3;

let kMoreThen100 = false;
let DMoreThan100 = false;

if(k1 >= 100 || k2 >= 100 || k3 >= 100){
    kMoreThen100 = true;
}
if(d1 >= 100 || d2 >= 100 || d3 >= 100){
    DMoreThan100 = true;
}
if (Davg === Kavg && DMoreThan100 && kMoreThen100) {
    console.log("Draw");
}
else if(Davg > Kavg && DMoreThan100){
    console.log("The Winner Is Dolphins");
}
else if(Kavg > Davg && kMoreThen100){
    console.log("The Winner Is Koalas");
}
else{
    console.log("No One Won");
}
