// Goodboy-Oldboy (A dog age calculator)
//create three variables dogYearOfBirth, dogYearFuture, dogYear
let dogYearFuture = 2027;
let dogYearOfBirth = 2017;
let shouldShowResultInDogYears = false;

let dogHumanYear = dogYearFuture - dogYearOfBirth;

let dogYear = dogHumanYear * 7;

if (shouldShowResultInDogYears) {
    let dogAge = `Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`;
    console.log(dogAge);
    
} else {
    let dogAgeHumanYear = `Your dog will be ${dogHumanYear} dog years old in ${dogYearFuture}.`;
    console.log(dogAgeHumanYear);    
}


/*

console.log("Your dog will be " + dogYear + " dog years old in " +
dogYearFuture + " .");


console.log("Your dog will be " + dogHumanYear + " dog years old in " + dogYearFuture + " .");    

*/