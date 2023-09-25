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

// const firstName = 'Joody';
// const job = 'teacher';
// const birthYear = 1995;
// const year = 2023;

// // Old template - string
// const joody = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(joody);

// // Template literal - string
// const joodyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
// console.log(joodyNew);

// // Old template - new line
// console.log('Staring with \n\
// multiple \n\
// lines');

// // Template literal - new line
// console.log(`Staring with
// multiple
// lines`);


// const age = 13;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log('Joody can start driving license 🚗') // add emuji = cmd + ctrl + space
// }else{
//     const yearLeft = 18 - age;
//     console.log(`Joody is too young. Wait for another ${yearLeft} years :)`)
// }


// const birthYear = 1995;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// Type conversion
// Convert string to number
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// // Convert number to string
// console.log(String(23), 23); //in console, 23(white = string) 23(purple = number)

// // Type coercion (2 type)
//  console.log('I am ' + 23 + ' years old') // 23(number) was converted to string because of + operator 
//  console.log('23' + '10' + 3)  // result is 23103 because of + operator convert number to string 
//  console.log('23' - '10' - 3)  // result is 10 because of - operator convert string to number
//  console.log('23' * '10')  // result is 230 because of * operator convert string to number
//  console.log('23' / '10') // result is 2.3 because of / operator convert string to number

// 5 falsy values: 0, '', undefined, null, NaN

// const money = 0;
// if(money){
//     console.log("Don't spend it all!") // 100 is true, 0 is false
// }else{
//     console.log("You should get a job!")
// }

// const age = 18;
// if(age === 18) console.log("You just became an adult"); // === (exact value) is boolean type means (18 === 18) return true 

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log('Cool! 23 is amazing number!')
// } else if(favourite === 7){
//     console.log('Cool! 7 is amazing number!')
// } else if(favourite === 9){
//     console.log('Cool! 9 is amazing number!')
// } else {
//     console.log('Number is not 23 or 9 or 7')
// }

// if(favourite !== 23) console.log('Why not 23?')

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision); // and
// console.log(hasDriverLicense || hasGoodVision); // or
// console.log(!hasDriverLicense); // not

// if(hasDriverLicense && hasGoodVision){
//     console.log('Joody is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }


// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code example');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend ;)');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// Ternary operator
// Ex.1
const age = 8;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');  // condition ? console.log(if true) : (if false);

// Ex.2
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// Ex.3
let drink2
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2)

// Ex.4
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);