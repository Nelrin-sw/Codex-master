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