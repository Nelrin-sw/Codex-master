"use strict";

var bill = 275;
var tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log("The bill was ".concat(bill, ", the tip was ").concat(tip, ", and the total value ").concat(bill + tip));
bill = 40;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log("The bill was ".concat(bill, ", the tip was ").concat(tip, ", and the total value ").concat(bill + tip));
bill = 403;
tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log("The bill was ".concat(bill, ", the tip was ").concat(tip, ", and the total value ").concat(bill + tip));