const firstName = 'Honey';
const job = 'beginner coder';
const birthYear = 2008;
const now_year = 2021;

// const honey  =  "I'm " + firstName + ' a ' + (now_year - birthYear) + ' years old ' + job + '!'  (Killing)
const honey = `I'm ${firstName} a ${now_year - birthYear} years old ${job}!` // (Not killing)
console.log(honey);

console.log(`I am Nelrin!`);

console.log('String with \n\ Pokemon and \n\ Password');
console.log(`string
pokemon
passwart
Qazplm09`);

// ----------------------------------------------------------------

const age = 13;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Pokemon can start driving`);
} else {
    console.log(`Pokemon can not start driving`)
}

// ----------------------------------------------------------------

const birthYear2 = 2007;
let century;

if (birthYear2 <= 2000) {
    century = 20
}if (birthYear2 <= 3000){
    century = 30
}else {
    century = 56    
}

console.log(century);