"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var inputYear = "1991";
console.log(Number(inputYear) + 1233);
console.log(Number("honey"));
console.log(typeof NANa === "undefined" ? "undefined" : _typeof(NANa));
console.log('I am ' + 25 + ' years old');
console.log('23' + '10' - '3'); // it is a concantinate

console.log('23' * '2');
console.log('12' / '2');
console.log('435' > '245');
console.log(); // ----------------------------------------------------------------

var n = '1' + 1;
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + '5');
console.log(2 + 3 + 4 - '5');
console.log('10' - '4' - '3' + 2 + '5'); // ----------------------------------------------------------------

console.log(undefined);
console.log(0);
console.log(null); // console.log(NAN);

console.log('String');
console.log(Boolean({}));
var money = 8;

if (money) {
  console.log("don't spend it all");
} else {
  console.log("get a job from Mukesh");
}

var height = 0;

if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
} // ----------------------------------------------------------------