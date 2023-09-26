// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio';
// const private = 534;

// Functions
// function logger () {
//     console.log('My name is Joody')
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} orange.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// Function Declarations vs. Expressions (function is a value, so we can store in variable)
// Function Declarations
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
// console.log(age1);

// Function Expressions
const calcAge2 = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge1(1991);
console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1991));