// Global Scope

var a = 1
let b = 2
const c = 3

// function test() {
//     var a = 4
//     let b = 5
//     const c = 6
//     console.log('Function Scope', a, b, c)
// }
//
// console.log('Global Scope', a, b, c)

// if (true) {
//     var a = 4
//     let b = 5
//     const c = 6
//     console.log('If Scope:', a, b, c)
// }

for (let a = 0; a < 10; a++) {
    console.log(`Loos ${a}`)
}

console.log('Global Scope', a, b, c)
