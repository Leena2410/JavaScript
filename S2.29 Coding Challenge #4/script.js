const value = 60;
let tip;
let full;
switch (value) {
    case value>300 && value<50:
        tip = 0.15;
        full = value + (value * tip);
        break;

    default:
        tip = 0.2;
        full = value + (value * tip);
        break;
}

console.log(`The bill was ${value}, the tip was ${tip}, and the total value is ${full}`);