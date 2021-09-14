const years = [2021, 2022, 1995, 2044];
const ages = [];

for (let i = 0; i < years.length; i++) {
    console.log(years[i]);
    ages.push( 2050 - years[i] )
}
console.log(ages);


const vikas = [`Nelrin`, `Vashisth`, 2021-2008, `student`,[`Ram`, `Yash`, `Adi`]]

for (let i = 0; i < vikas.length; i++) {
    if (typeof vikas[i] !== `string`) continue; 
    console.log(vikas[i], typeof vikas[i]);
}

for (let i = 0; i < vikas.length; i++) {
    if (typeof vikas[i] !== `string`) break; 
    console.log(vikas[i], typeof vikas[i]);
}

for (let i = 0; i < years.length; i++) {
    if (typeof years[i] !== `string`) continue; 
    console.log(years[i], typeof years[i]);
}

for (let i = 0; i < years.length; i++) {
    if (typeof years[i] !== `string`) break;  
    console.log(years[i], typeof years[i]);
}

