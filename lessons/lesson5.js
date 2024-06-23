// Logical "AND"
// consol.log(true && false) // all values to be TRUE for expression to be TRUE

// Logical "OR"
// consol.log(false || false) //any value should be TRUE for the expression TRUE

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligiblilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligiblilityForDriverLicense)

var eligiblilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligiblilityForDriverLicense)

// Logical "NOT"
//console.log(!true)
console.log(6 !==10)
