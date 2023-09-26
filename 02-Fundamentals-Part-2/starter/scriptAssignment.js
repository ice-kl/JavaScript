// LECTURE: Functions

// function describeCountry (country, population, capitalCity) {
//     const detailCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return detailCountry;
// }

// const countryTH = describeCountry('Thailand', 70, 'Bangkok');
// console.log(countryTH);

// const countryFN = describeCountry('Finland', 6, 'Helsinki');
// console.log(countryFN);

// const countryAU = describeCountry('Australia', 50, 'Sydney');
// console.log(countryAU);

// LECTURE: Function Declarations vs. Expressions
// Function Declarations
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageTH = percentageOfWorld1(70);


// Function Expressions
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageTH);

