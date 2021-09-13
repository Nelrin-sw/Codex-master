function calAge(birthYear) {
    return 2037 - birthYear
}

const age = calAge(2008)

console.log(age);

// ----------------------

const calAge2 = (birthYear) => 2037 - birthYear

const age2 = calAge2(2008)
console.log(age2);

// ----------------------

const yearsUntilRetiarment = (birthYear, firstName) => {
    const age3 = 2037 - birthYear
    const retiarment = 65 - age3
    // return retiarment
    return `${firstName} retiars in ${retiarment} years.`
}

console.log(yearsUntilRetiarment(2008, `Trie`));

// ----------------------