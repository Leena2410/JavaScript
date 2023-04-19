const a = true;
const b = true;

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);

const c = false;

if (a && b && !c) {
    console.log("Can drive");
}
else{
    console.log("Cannot drive");
}