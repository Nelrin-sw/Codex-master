"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var app = true;
console.log(app); // --------------------------------

console.log(_typeof(app));
console.log(_typeof(123));
console.log(_typeof("WWE")); // --------------------------------

app = "yes";
console.log(app);
console.log(_typeof(app)); // --------------------------------

var year;
console.log(year);
console.log(_typeof(year)); // --------------------------------

console.log(_typeof(null)); // ------------------------------

var age = 13;
console.log(age);
age = 14;
console.log(age); // --------------------------------

var birthYear = 2008;
console.log(birthYear); // --------------------------------

var job = 'program';
console.log(job); // maths oprator 

var now = 2037;
var ageHoney = now - 2022;
var ageNeel = now - 2014;
console.log(ageHoney * 2, ageNeel / 10, Math.pow(2, 4));
console.log(ageHoney, "and", ageNeel); // asinment oprator

var x = 10 + 5;
x += 5;
x *= 4;
x -= 5;
x /= 3;
console.log(x); // Comparision oprator

console.log(ageHoney);
console.log(ageHoney < ageNeel);
console.log(ageHoney >= 10);
console.log(now - 2008 > now - 2014); // ------------------------------