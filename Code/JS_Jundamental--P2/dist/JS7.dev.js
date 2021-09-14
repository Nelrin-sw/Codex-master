"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var aryan = {
  firstName: "Aryan",
  lastName: "Vashisth",
  age: 7,
  drink: true,
  caluAge: function caluAge(birthYear) {
    return 2021 - birthYear;
  },
  summry: function summry() {
    return "I am ".concat(this.firstName, " ").concat(this.lastName, ". I am ").concat(this.caluAge(2014), " years old. I drink ").concat(this.drink ? 'coke' : 'fruti', " ");
  }
};
console.log(aryan.summry()); // ----------------------------------------------------------------
// console.log(`lifting weights reptistion 1`);
// console.log(`lifting weights reptistion 2`);
// console.log(`lifting weights reptistion 3`);
// console.log(`lifting weights reptistion 4`);
// console.log(`lifting weights reptistion 5`);
// console.log(`lifting weights reptistion 6`);
// console.log(`lifting weights reptistion 7`);
// console.log(`lifting weights reptistion 8`);
// console.log(`lifting weights reptistion 9`);
// console.log(`lifting weights reptistion 10`);

for (var rap = 1; rap <= 10; rap++) {
  console.log("Lifiting weights reptistion ".concat(rap));
}

var vikas = ["Nelrin", "Vashisth", 2021 - 2008, "student", ["Ram", "Yash", "Adi"]];
var typesVikas = [];

for (var i = 0; i < vikas.length; i++) {
  console.log(vikas[i]); // console.log(typeof vikas[i]);

  typesVikas.push(_typeof(vikas[i]));
}

console.log(types);