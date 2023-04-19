const age = 18;
if (age === 18) {
    console.log("Just became an adult :D");
}
if(String(age) == 18){
    console.log("Just became an adult");
}

const fav = prompt("What's your favourit number");
console.log(fav)

if (fav == 2) {
    console.log("2 is the best number");
}
else if(fav == 7){
    console.log("Ahh maybe..?");
}
else{
    console.log("The number is not 2 or 7");
}

if(fav !== 23){
    console.log("Why not 23? ");
}