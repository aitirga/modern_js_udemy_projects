// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
    return 'Hello ' + firstName + ' ' + lastName
}
console.log(greet('John', 'Doe'))

// FUNCTION EXPRESSIONS

const square = function(x=2){
    return x*x
}
// (function(){
//     console.log('g')
// })()

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

const todo = {
    add: function (){
        console.log('Add todo...')
    },
    edit: function (id){
        console.log(`Edit todo ${id}`)
    }
}
todo.add()
todo.edit(id=4)