const calcAverageD1T1 = (a,b,c) => (a + b + c)/3
console.log(calcAverageD1T1(44,23,71));

const calcAverageD1T2 = (a,b,c) => (a + b + c)/3
console.log(calcAverageD1T2(65,54,49));

const checkWinnerD1 = (avgT1, avgT2) => {
    if (avgT1 > avgT2) {
        return `Team 1 won by ${avgT1}% more average than team 2.`
    }else{
        return `Team 2 won by ${avgT2}% more average than team 1.`
    }
}

console.log(checkWinnerD1(46, 56))

// ---------------------------------------------------------------------------

const calcAverageD2T1 = (a,b,c) => (a + b + c)/3
console.log(calcAverageD2T1(85,54,41));

const calcAverageD2T2 = (a,b,c) => (a + b + c)/3
console.log(calcAverageD2T2(23,34,27));

const checkWinnerD2 = (avgD2T1, avgD2T2) => {
    if (avgD2T1 > avgD2T2) {
        return `Team 1 won by ${avgD2T1 - avgD2T2}% more average than team 2.`
    }else{
        return `Team 2 won by ${avgD2T2 - avgD2T1}% more average than team 1.`
    }
}

console.log(checkWinnerD2(60,28))