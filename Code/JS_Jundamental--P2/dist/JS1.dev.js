"use strict";

// Functions
function logger() {
  console.log("My name is Honey.");
}

logger();

function fruitProcessor(apples, orange) {
  // console.log(apples , orange);
  var juice = "Juice with ".concat(apples, " apples and ").concat(orange, " oranges");
  return juice;
}

var appleJuice = fruitProcessor(5, 0); // argument 5,0 for parmeters apple

console.log(appleJuice);
var orangeJuice = fruitProcessor(0, 62);
console.log(orangeJuice);
var mixedJuice = fruitProcessor(3, 5);
console.log(mixedJuice); // fruitProcessor(5 , 10)