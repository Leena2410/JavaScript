'use strict';

function logger() {
    console.log("My name is Leena");
}

logger();

function fruit(apples, oranges) {
    console.log(apples , oranges);
    const juice = `juice with ${apples} apples, and ${oranges} oranges`;
    return juice;
}

const juiceType = fruit(3 , 4);
console.log(juiceType);
console.log(fruit(5 , 0));