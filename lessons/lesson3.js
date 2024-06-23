//Objects

var customer = {
    firstname: 'John',
    lastname: 'Smith',
    cars: ["Volvo", "Toyoto", "Tesla"]
}
console.log(customer.firstname)
console.log(customer['lastname'])

//Dot notation
customer.firstname = "Mike"
//Bracket notation
customer['lastname'] = "Silver"
console.log(`${customer.firstname} ${customer.lastname}`)

//arrays
var car = ["Volvo", "Toyoto", "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])