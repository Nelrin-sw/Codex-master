const vekasAge = (birthYear) => {
    return 2021 - birthYear
}

const vikasAge = vekasAge(1995)

console.log(vikasAge);

// ------------------------------

function cutFruitPiceces(furte) {
    return furte * 4
}

function jucer(apples, mangoes) {
    const applePices = cutFruitPiceces(apples)
    const mangoesPices = cutFruitPiceces(mangoes)
    const juice = `Juice with ${applePices} piceces of apple and ${mangoesPices} piceces of mangoes.`
    return juice
}

console.log(jucer(13,27));