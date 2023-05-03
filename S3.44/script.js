'use strict';

const Leena = {
    firstName : 'Leena',
    birthYear : 2003,
    job : 'Students',
    friends : ['friend 1', 'friend 2'], //I'm not the most extroverted person
    hasDriverLic: false,
    age : 0,

    // clacAge : function (birthYear){
    //     return 2023 - birthYear;
    // }

    // clacAge: function(){
    //     return 2023 - this.birthYear;
    // }

    clacAge: function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `Name: ${this.firstName}, age: ${this.clacAge()}`;
    },
};

//console.log(Leena.clacAge());
console.log(Leena.getSummary());