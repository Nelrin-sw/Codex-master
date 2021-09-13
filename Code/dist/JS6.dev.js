"use strict";

var age = 18;
if (age == 18) console.log('you just become a adult. (loss)');
if (age === 18) console.log('You just become a adult. (Stric)'); // ------------------------------
// const favi = Number(prompt('What is your favi. no'))
// console.log(typeof favi)
// if (favi === 23) {
//     console.log('23 is a cool number')
// }else if(favi === 7 ){
//     console.log('7 is a cool number');
// }else{
//     console.log('Number is not 23 or 7');
// }
// AND oprator OR oprator & != NOT operator

var hasDriverLicense = true;
var hasGoodVison = true;
var shouldDrive = hasDriverLicense && hasGoodVison;
var isTired = true;
console.log(!hasGoodVison);

if (hasDriverLicense && hasGoodVison && !isTired) {
  console.log('You are allowed to drive');
} else {
  console.log('You are not allowed to drive');
} // no + no * val / nono