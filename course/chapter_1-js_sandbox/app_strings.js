// var name = 'John Doe';
// console.log(name);
//
// name = "Steve Smith";
// console.log(name);
//
// var greeting;
// console.log(greeting)
// console.log("hye")
//
// var $name = 'John'
// var firstName = "test"

// LET

// let name = "John Doe"
// console.log(name)
//
// name = "Steve Smith"
// console.log(name)
//
// const name = 'John'
// console.log(name);
// name = "Sarah"
//
// const person = {
//     name: 'John',
//     age: 30
// }
//
// person.name = 'Sara';
//
// console.log(person)

// const numbers = [1, 2, 3]
// numbers.push(2)
// console.log(numbers)

// Primitive

// // String
// const name = 'John Dow'
//
// // Number
// const age = 45
//
// const car = null
//
// console.log(typeof car)

// const today = new Date();
// console.log(today)
// console.log(typeof today)

// let val;
//
// // Number to string
//
// val = String(555);
// val = String(4+4);
//
// // Bool to string
// val = String(true);
//
// // Date to string
// val = String(new Date())
//
// // Array to string
// val = String([1, 2, 3])

// toString()

// val = (5).toString()
// val = (true).toString()
//
// // String to number
// val = Number('5');
// val = Number(true)
// val = Number(null)
// val = Number('hello')
//
// // Additional method
// val = parseInt('100.30')
// val = parseFloat('100.30')
// //Output
//
//
// console.log(val)
// console.log(typeof val)
// // console.log(val.length)
// console.log(val.toFixed(2))
//
// const val1 = '5'
// const val2 = 6
// const sum = Number(val1 + val2)
//
// console.log(sum)
// console.log(typeof sum)

//
// const num1 = 100;
// const num2 = 50;
// let val;
//
// // Simple math with numbers
//
// val = num1 + num2
//
// val = num1 % num2
//
// // Math object
// val = Math.PI
// val = Math.floor(Math.random() * 20 + 1)
//
// console.log(val)

const firstName = 'William'
const lastName = 'Johnson'
const age = 36
const str = 'Hello there my name is Brad'
const tags = 'web design,web_development,test'

let val

val = firstName + lastName

// Concatenation

val = firstName + ' ' + lastName

// Append

val = 'Brad '
val += 'Traversy'

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

//Escaping

val = 'That\'s awesome'

// Length
val = firstName.length

// Concat
val = firstName.concat(' ', lastName)

val = firstName.toUpperCase()

val = firstName[0]

// indexOf()

val = firstName.indexOf('l')
val = firstName.lastIndexOf('l')

// charAt()
val = firstName.charAt('6')

//  Get last char

val = firstName.charAt(firstName.length - 1)

// substring()
val = firstName.substring(0, 4)

val = firstName.slice(-3)

// Split

val = str.split(' ')
val = tags.split(',')

// Replace



console.log(val)