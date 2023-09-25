// // Value and Variables
// const country = "Thailand";
// const continent = "Asia";
// const populationTh = 70;

// console.log(country);
// console.log(continent);
// console.log(populationTh);

// // Data Types
// let isIsland = false;
// let language

// console.log(typeof isIsland);
// console.log(typeof populationTh);
// console.log(typeof country);
// console.log(typeof language);

// language = "Thai";

// // Basic operators
// console.log(populationTh / 2);

// populationTh++;
// console.log(populationTh);

// const populationFin = 6;
// console.log(populationTh > populationFin);

// console.log(populationTh < 33);

// let description = 
//     country + 
//     ' is in ' + 
//     continent + 
//     ', and its ' + 
//     populationTh + 
//     ' million people speak ' + 
//     language;
// console.log(description);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

// description = `${country} is in ${continent}, and its ${populationTh} million people speak ${language}`;
// console.log(description);

// const country = "Thailand";
// const populationTh = 130;
// const populationAvg = 33;

// if(populationTh >= populationAvg){
//     console.log(`${country} population is above average`);
// }else{
//     const populationBelowAvg = populationAvg - populationTh;
//     console.log(`${country} population is ${populationBelowAvg} below average`);
// }


// console.log('9' - '5');  // result = 4
// console.log('19' - '13' + '17'); // result = 617
// console.log('19' - '13' + 17); // result = 23
// console.log('123' < 57); // result = false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // result = 1143 

// const numNeighbours = prompt('How many neighbour countries does your country have?');

// if (numNeighbours === 1){
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1){
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// // LECTURE: Logical Operators
// const country = 'Thailand';
// const language = 'english';
// const population = 40;
// const isIsland = false;

// if(language === 'english' && population < 50 && !isIsland){
//     console.log(`You should live in ${country} :)`)
// }else{
//     console.log(`${country} does not meet your criteria :(`);
// }

// LECTURE: The switch Statement
// const language = 'english';

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish:':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// LECTURE: The Conditional (Ternary) Operator
const population = 34;
const country = 'Thailand';

population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

