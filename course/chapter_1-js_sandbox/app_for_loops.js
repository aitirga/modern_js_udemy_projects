// FOR LOOP
// for (let i = 0; i <= 10; i++) {
//     if (i === 2){
//         console.log('2 is my favourite number')
//         continue
//     }
//     console.log(`Number ${i}`)
// }

// WHILE LOOP

// let i = 0
// while (i < 10){
//     console.log(i)
//     i++
// }

// DO WHILE loop

// let i = 1;
//
// do {
//     console.log(i)
//     i++
// }
//
// while (i < 10)

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// // FOREACH
// cars.forEach(function (car){
//     console.log(car)
// })

// MAP
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sarah'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'},
// ]
//
// const ids = users.map(function (user){
//     return user.id
// })
//
// cars.forEach(function (car, index, array){
//     console.log(car)
//     console.log(index)
//     console.log(array)
// })

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}
for (let x in user) {
    console.log(`${x} : ${user[x]}`)
}

