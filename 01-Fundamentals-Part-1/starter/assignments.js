// Value and Variables
let country = "Thailand";
const continent = "Asia";
let populationTh = 70;

console.log(country);
console.log(continent);
console.log(populationTh);

// Data Types
let isIsland = false;
let language

console.log(typeof isIsland);
console.log(typeof populationTh);
console.log(typeof country);
console.log(typeof language);

language = "Thai";

// Basic operators
console.log(populationTh / 2);

populationTh++;
console.log(populationTh);

const populationFin = 6;
console.log(populationTh > populationFin);

console.log(populationTh < 33);

let description = 
    country + 
    ' is in ' + 
    continent + 
    ', and its ' + 
    populationTh + 
    ' million people speak ' + 
    language;
console.log(description);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

description = `${country} is in ${continent}, and its ${populationTh} million people speak ${language}`;
console.log(description);


