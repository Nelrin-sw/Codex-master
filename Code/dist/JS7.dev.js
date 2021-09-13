"use strict";

// switch
var day = 'pokemon';

switch (day) {
  case 'Monday':
    console.log("Monday is a fun day");
    break;

  case 'Tuesday':
    console.log("Tuesday is a Work day");
    break;

  case 'Wednesday':
  case 'Thursday':
    console.log("Wednesday & Thursday are coding day");
    break;

  case 'Friday':
    console.log("Friday is a hot day");
    break;

  case 'Saturday':
  case 'Sunday':
    console.log("Saturday & Sunday are holiday");

  default:
    console.log("This is not a valid day");
}

if (day === 'Monday') {
  console.log("Monday is a fun day");
} else if (day === 'Tuesday') {
  console.log("Tuesday is a Work day");
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log("Wednesday & Thursday are coding day");
} else if (day === 'Friday') {
  console.log("Friday is a hot day");
} else if (day === 'Saturday' || day === 'Sunday') {
  console.log("Saturday & Sunday are holiday");
} else {
  console.log("This is not a valid day");
}