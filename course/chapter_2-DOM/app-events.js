// document.querySelector('.clear-tasks').addEventListener('click',
//     function (e){
//     console.log('Hello World')
//         e.preventDefault()
//     })

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
    let val
    val = e

    e.preventDefault()
    // Event target element
    val = e.target
    val = e.target.className
    val = e.target.classList
    e.target.innerText = 'Hello'
    // Event type
    val = e.type
    val = e.timeStamp
    val = e.clientY
    val = e.clientX

    val = e.offsetX
    val = e.offsetY


    console.log(val)
}