const id = 100

// EQUAL TO
//
// if (id == 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }
//
// // NOT EQUAL TO
//
// if (id != 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }
//
// // EQUAL TO VALUE & TYPE
//
// if (id === 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }
//
// // NOT EQUAL TO VALUE & TYPE
//
// if (id !== 100) {
//     console.log('CORRECT')
// } else {
//     console.log('INCORRECT')
// }
//
// // Test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`)
// } else {
//     console.log('NO ID')
// }
//
// // GREATER OR LESS THAN
// // IF ELSE
//
// const color = 'yellow'
// if(color === 'red') {
//     console.log('Color is red')
// } else if (color === 'blue') {
//     console.log('Color is blue')
// } else {
//     console.log('Color is not red or blue')
// }

// LOGICAL OPERATORS /&& ||)

const name = 'Steve'
const age = 15

if (age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')

// WITHOUT BRACES

if (id === 100)
    console.log('CORRECT')
else
    console.log('INCORRECT')