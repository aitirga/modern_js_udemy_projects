// Define UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// Load all event listeners

function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks)

    // Add task event
    form.addEventListener('submit', addTask)
    // Remove task event
    taskList.addEventListener('click', removeTask)
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks)
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Get Tasks from LS

function getTasks() {
    let tasks
    // Check if local storage is empty
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function (task) {
        // Create li element
        console.log(task)
        const li = document.createElement('li')
        // Add class
        li.className = 'collection-item'
        // Create text node and append to li
        li.appendChild(document.createTextNode(task))
        // Create new link element
        const link = document.createElement('a')
        // Add class
        link.className = 'delete-item secondary-content'
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link)
        // Append li to ul
        taskList.appendChild(li)
    })

}


function addTask (e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }

    // Create li element
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    // Append li to ul
    taskList.appendChild(li)

    // Store in LS
    storeTaskInLocalStorage(taskInput.value)

    // Initialize back
    taskInput.value = ''

    e.preventDefault()
}

// Store Task

function storeTaskInLocalStorage(task)  {
    let tasks
    // Check if local storage is empty
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))

}

function removeTask(e) {
    // Check I am clicking the fa fa-remove class
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove()

            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)

            }

        }
    }


function clearTasks(e) {
    if (confirm('Are you sure you want to delete all the tasks?')) {
        // taskList.innerHTML = ''

        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)

        }

        // Clear from LS
        clearTasksFromLocalStorage()

        // Array.from(taskList.children).forEach(function (child) {
        //     child.remove()
        // })
    }
}

// Filter Tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase()

    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent
        if (item.toLowerCase().indexOf(text) !== -1) {
            task.style.display  = 'block'
        } else {
            task.style.display = 'none'
        }
    })

    console.log(text)
}


// Remove from LS

function removeTaskFromLocalStorage(taskItem) {
    let tasks
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    }

// Clear tasks from LS

function clearTasksFromLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify([]))
}