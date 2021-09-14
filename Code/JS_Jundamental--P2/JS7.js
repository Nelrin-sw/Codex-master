const aryan = {
    firstName: `Aryan`,
    lastName: `Vashisth`,
    age: 7,
    drink: true,
    caluAge: function (birthYear) { return 2021 - birthYear},
    summry: function () {
        return `I am ${this.firstName} ${this.lastName}. I am ${this.caluAge(2014)} years old. I drink ${this.drink ? 'coke' : 'fruti'} `
    }
}

console.log(aryan.summry());

// ----------------------------------------------------------------

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

for (let rap = 1; rap <= 10; rap++) {
    console.log(`Lifiting weights reptistion ${rap}`)
}

const vikas = [`Nelrin`, `Vashisth`, 2021-2008, `student`,[`Ram`, `Yash`, `Adi`]]
const typesVikas = []
for (let i = 0; i < vikas.length; i++) {
    console.log(vikas[i]);
    // console.log(typeof vikas[i]);
    typesVikas.push(typeof vikas[i])
}

console.log(types)