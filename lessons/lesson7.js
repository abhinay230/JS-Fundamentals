// Loops
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')

// for(statement1; statement2; statement3){}

for(let i = 0; i<5; i=i+1)
    {
        console.log('Hello world!' + i)
    }

 // for of loop
 var cars = ["Volvo", "Tesla", "TATA"]
 for(let car of cars)
    {
        console.log(car)
        if(car == "Volvo")
            {break}
    }   

 // ES6 syntax for each loop
 cars.forEach(car => {console.log(car)})  