"use strict";

var firstName = 'Honey';
var job = 'beginner coder';
var birthYear = 2008;
var now_year = 2021; // const honey  =  "I'm " + firstName + ' a ' + (now_year - birthYear) + ' years old ' + job + '!'  (Killing)

var honey = "I'm ".concat(firstName, " a ").concat(now_year - birthYear, " years old ").concat(job, "!"); // (Not killing)

console.log(honey);
console.log("I am Nelrin!");
console.log('String with \n\ Pokemon and \n\ Password');
console.log("string\npokemon\npasswart\nQazplm09"); // ----------------------------------------------------------------

var age = 13;
var isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Pokemon can start driving");
} else {
  console.log("Pokemon can not start driving");
} // ----------------------------------------------------------------


var birthYear2 = 2007;
var century;

if (birthYear2 <= 2000) {
  century = 20;
}

if (birthYear2 <= 3000) {
  century = 30;
} else {
  century = 56;
}

console.log(century);