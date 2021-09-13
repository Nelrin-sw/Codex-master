// Functions

function logger() {
    console.log(`My name is Honey.`)
}

logger();

function fruitProcessor(apples, orange) {
    // console.log(apples , orange);
    const juice = `Juice with ${apples} apples and ${orange} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5 , 0) // argument 5,0 for parmeters apple
console.log(appleJuice);

const orangeJuice = fruitProcessor(0 , 62)
console.log(orangeJuice);

const mixedJuice = fruitProcessor(3 , 5)
console.log(mixedJuice);
// fruitProcessor(5 , 10)