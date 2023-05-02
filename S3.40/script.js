'use strict';

const friends = ['friend1' , 'friend2']

const length = friends.push('friend3');
console.log(length);

friends.unshift('friend0');
console.log(friends);

// Remove 
const friendPop = friends.pop();
console.log(friendPop);

const unshifted = friends.shift();
console.log(unshifted);

console.log(friends);

console.log(friends.indexOf('friend10'));

console.log(friends.includes('pop'));
