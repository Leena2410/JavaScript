function cutFruit(fruit){
    return fruit * 4;
}
function fruit(apples, oranges) {
    const cutApples = cutFruit(apples);
    const cutOranges = cutFruit(oranges);

    //console.log(apples , oranges);
    
    const juice = `juice with ${cutApples} peices f apple, and ${cutOranges} peices of oranges`;
    return juice;
}

console.log(fruit(4, 5));