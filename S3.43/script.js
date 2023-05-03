'use strict';

const Leena = {
    firstName : 'Leena',
    age : 2023 - 2003,
    job : 'Students',
    friends : ['friend 1', 'friend 2'] //I'm not the most extroverted person
};

console.log(Leena.firstName);

const interstedin = prompt('What do you want to know');
//console.log(interstedin);



if (Leena[interstedin]) {
    console.log(Leena[interstedin]);
}
else{
    console.log("Value not defined");
}

console.log(`${Leena.firstName} has ${Leena.friends.length}, her best friend is ${Leena.friends[0]}`);