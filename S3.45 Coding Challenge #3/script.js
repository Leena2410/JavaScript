'use strict';

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    BMI : 0,
    calcBMI : function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    BMI : 0,
    calcBMI : function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    },
};

console.log(`${John.fullName} BMI: ${John.calcBMI()}`);
console.log(`${Mark.fullName} BMI: ${Mark.calcBMI()}`);