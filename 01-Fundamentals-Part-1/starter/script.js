// let js = 'amazing';
// console.log(40+8+23-10);

// let firstName = "Joody";
// console.log(firstName);

// Math operators
// const now = 2023;
// const ageJoody = now - 1995;
// const ageSarah = now - 2000;
// console.log(ageJoody, ageSarah);

// console.log(ageJoody * 2, ageJoody / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Joody";
// const lastName = "Aaaaa";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators (return Boolean)
// console.log(ageJoody > ageSarah); // > , < , >= , <=
// console.log(ageJoody <= 13);

// const isFullAge = ageJoody >= 13;

// console.log(now - 1991 > now - 2018);

const firstName = 'Joody';
const job = 'teacher';
const birthYear = 1995;
const year = 2023;

// Old template - string
const joody = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(joody);

// Template literal - string
const joodyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(joodyNew);

// Old template - new line
console.log('Staring with \n\
multiple \n\
lines');

// Template literal - new line
console.log(`Staring with
multiple
lines`);
