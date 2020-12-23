let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// // Get child nodes
// val = list.childNodes
// val = list.childNodes[0].nodeName
// val = list.childNodes[0].nodeType

// Get children
//
// val = list.children
// val = list.children[0]
//
// list.children[1].textContent = 'Hello'
//
// val = list.children[3].children
//
// val = list.firstChild
// val = list.firstElementChild
//
// val = list.childElementCount

// Get parent node

val = listItem.parentNode
val = listItem.parentElement.parentElement

// Get next sibling

val = listItem.nextSibling
val = listItem.nextElementSibling

// Get previous sibling

val = listItem.previousSibling
val = listItem.previousElementSibling

console.log(val)