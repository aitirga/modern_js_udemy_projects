let val;

// val = document
// val = document.all[0]
// val = document.head
// val = document.body
// val = document.URL

val = document.forms[0].method
val = document.forms[0].id

val = document.links
val = document.links[0]
val = document.links[0].id
val = document.links[0].className

val = document.images

val = document.scripts
val = document.scripts[2].getAttribute('src')

let scripts = document.scripts

let scriptsArray = Array.from(scripts)

scriptsArray.forEach(function(script) {
    console.log(script.getAttribute('src'))
})

console.log(val)