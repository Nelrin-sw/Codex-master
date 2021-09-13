"use strict";

var weekName = ["Monday", "Wednesday", "Friday", "Sunday"]; // in arry elemensts[](){};''""``_&-<>[]{}/\/\

console.log(weekName);
console.log(weekName.length);
console.log(weekName[1] = "Thursday");
console.log(weekName);
console.log(weekName.pop());
console.log(weekName);
console.log(weekName.push("Monday"));
console.log(weekName); // ------------

var honey = {
  firstName: "Nelrin",
  lastName: "Vashisth",
  age: 2021 - 2008,
  profession: "Student",
  Friends: ["Ram", "Angle", "Gagan"]
};
console.log(honey);
console.log(honey.lastName);
console.log(honey["firstName"]);
console.log(honey.Friends[0]);
var nameKey = "Name";
console.log(honey["first" + nameKey]);
console.log(honey["last" + nameKey]); // const intrstedIn = prompt(`What do you want to know about Honey? Choose between firstName, lastName, age, profession, friends and location`)
// console.log(honey[intrstedIn]);

honey.location = "A-502, India";
console.log(honey); // const intrstedIn = prompt(`What do you want to know about Honey? Choose between firstName, lastName, age, profession, friends and location`)
// if (honey[intrstedIn]) {
//     console.log(honey[intrstedIn]);
// }else{
//     console.log(`Incorrect keyword`)
// }

var nelrin = {
  firstName: "Nelrin",
  lastName: "Vashisth",
  birthYear: 2008,
  hasLicence: false,
  caluAge: function caluAge(birthYear) {
    return 2021 - birthYear;
  },
  summry: function summry() {
    return "".concat(this.firstName, " is a ").concat(this.caluAge(2008), " - years old and he has ").concat(this.hasLicence ? 'a' : 'no', " driver license");
  }
};
console.log(nelrin.summry());