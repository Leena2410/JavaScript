'use strict';
// *************    /0/ ****    /1/ *** //
const friends = ['friend1' , 'friend2']
console.log(friends);


console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'friend3';
console.log(friends);

const Leena = ['Leena', 'Student', 2023 - 2003, friends];

const calcAge = function (birthYear){
    return 2023 - birthYear;
}

const years = new Array(2000, 2001, 2002, 2003, 2004, 2005);

console.log(calcAge(years[0]));