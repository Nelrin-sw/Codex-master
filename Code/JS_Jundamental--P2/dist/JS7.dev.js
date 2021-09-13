"use strict";

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
console.log(aryan.summry());