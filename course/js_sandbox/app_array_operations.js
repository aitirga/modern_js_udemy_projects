// Create some arrays
const numbers = [43, 56, 33, 36, 5]
const numbers2 = new Array(22,54,64)
const fruit = ['Apple', 'Banana']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}]

// Length
val = numbers.length
// Check if it si array
val = Array.isArray(numbers)
// Get a single value
val = numbers[3]
// Find index of

val = numbers.indexOf(36)

// MUTATING ARRAYS
// Add on to end
// numbers.push(250)
// // Add on to front
// numbers.unshift(120)
// // Take off from end
// numbers.pop()
// // Take off from beginning
// numbers.shift()
// // Splice values
// numbers.splice(1, 2)
// // Reverse
// numbers.reverse()
// Concatenate
val = numbers.concat(numbers2)
//Sorting arrays
val = fruit.sort()
// val = numbers.sort()

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y
// })
//
// // Use the "compare function" to reverse
// val = numbers.sort(function(x, y){
//     return y - x
// })

// Find
function under50(num){
    return num < 50;
}
val = numbers.find(under50)

console.log(numbers)
console.log(val)