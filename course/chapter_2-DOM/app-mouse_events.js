const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// Event Handler

// // Click
// clearBtn.addEventListener('click', runEvent)
// // DoubleClick
// clearBtn.addEventListener('dblclick', runEvent)
// // MouseDown
// clearBtn.addEventListener('mousedown', runEvent)
// // MouseUp
// clearBtn.addEventListener('mouseup', runEvent)
// // MouseEnter
// card.addEventListener('mouseenter', runEvent)
// // MouseLeave
// card.addEventListener('mouseleave', runEvent)
// // MouseOver
// card.addEventListener('mouseover', runEvent)
// // MouseOut
// card.addEventListener('mouseout', runEvent)
// // MouseMove
card.addEventListener('mousemove', runEvent)


function runEvent(e) {
    console.log(`EVENT TYPE ${e.type}`)
    heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}