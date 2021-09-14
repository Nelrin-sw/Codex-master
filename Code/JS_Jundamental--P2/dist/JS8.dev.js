"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var years = [2021, 2022, 1995, 2044];
var ages = [];

for (var i = 0; i < years.length; i++) {
  console.log(years[i]);
  ages.push(2050 - years[i]);
}

console.log(ages);
var vikas = ["Nelrin", "Vashisth", 2021 - 2008, "student", ["Ram", "Yash", "Adi"]];

for (var _i = 0; _i < vikas.length; _i++) {
  if (typeof vikas[_i] !== "string") continue;
  console.log(vikas[_i], _typeof(vikas[_i]));
}

for (var _i2 = 0; _i2 < vikas.length; _i2++) {
  if (typeof vikas[_i2] !== "string") break;
  console.log(vikas[_i2], _typeof(vikas[_i2]));
}

for (var _i3 = 0; _i3 < years.length; _i3++) {
  if (typeof years[_i3] !== "string") continue;
  console.log(years[_i3], _typeof(years[_i3]));
}

for (var _i4 = 0; _i4 < years.length; _i4++) {
  if (typeof years[_i4] !== "string") break;
  console.log(years[_i4], _typeof(years[_i4]));
}