const friendName1 = `Ram`;
const friendName2 = `Neel`;
const friendName3 = `Nelrin`;

const friendsName = [`Ram`, `Neel`, `Nelrin`]

console.log(friendsName);

friendsName[2] = `Shiv` 

console.log(friendsName);
//----------

const year = new Array(2008, 2014, 2021, 20012, 1624 ,24462, 6433 , 3325432, 32643);

console.log(year);
console.log(year[0]);
console.log(year[1]);
console.log(year[year.length - 5]);

year[4] = `pokemon`

console.log(year);
// -----------

const caluAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [19905,1891,2008,2014,221]

// console.log(caluAge(years)); XX

const age1 = caluAge(years[4]);
const age2 = caluAge(years[years.length -6]);

console.log(age1);
console.log(years.length);

// -------------

const calAgeWoW = (birthYear, yearNow) => {return yearNow - birthYear}
const yearsBiYe = [1881, 1995, 2000, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
console.log(yearsBiYe.length);
console.log(`    Nope      `);
const ageWOW1 = calAgeWoW(yearsBiYe[4], 3000)
const ageWOW2 = calAgeWoW(yearsBiYe[0], 3000)
const ageWOW3 = calAgeWoW(yearsBiYe[6], 3000)
const ageWOW4 = calAgeWoW(yearsBiYe[5], 3000)
const ageWOW5 = calAgeWoW(yearsBiYe[21], 3000)
console.log(ageWOW1);
console.log(ageWOW2);
console.log(ageWOW3);
console.log(ageWOW4);
console.log(ageWOW5);