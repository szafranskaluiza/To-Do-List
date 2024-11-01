/* Plik script.js */

function updateDate() { 
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = currentDate;
}


function toggleTask(checkbox) {
    const taskElement = checkbox.parentElement;
    if (checkbox.checked) {
        taskElement.classList.add('completed');
    } else {
        taskElement.classList.remove('completed');
    }
    saveTasksToLocalStorage(); /* Zapisuje zmianę w pamięci podręcznej przeglądarki */
}


function addTask() {
    const taskList = document.getElementById('task-list');
    const taskText = prompt("Add task name:");
    const taskDateInput = document.getElementById('task-date').value;
    const categorySelect = document.getElementById('category').value;
    
    if (taskText) {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.setAttribute('data-category', categorySelect);
        
        const taskDate = taskDateInput ? taskDateInput : "Today";

        newTask.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <h3>${taskText}</h3>
            <span class="category-label category-${categorySelect}">${categorySelect}</span>
            <span>${taskDate}</span>
            <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
        `;
        taskList.appendChild(newTask);
        saveTasksToLocalStorage();
    }
}


function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
    saveTasksToLocalStorage();
}

function filterTasksByCategory() {
    const filter = document.getElementById('filter-category').value;
    const tasks = document.querySelectorAll('.task');

    tasks.forEach (task => {
        const taskCategory = task.getAttribute('data-category');
        if (filter === "all" || taskCategory === filter) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function saveTasksToLocalStorage() {
const taskList = document.getElementById('task-list');
const tasks = Array.from(taskList.children).map(task => {
    const taskText = task.querySelector('h3').innerText;
    const taskDate = task.querySelector('span:last-child').innerText;
    const category = task.getAttribute('data-category');
    const completed = task.querySelector('input[type="checkbox"]').checked;

    return { taskText, taskDate, category, completed };
});
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(({ taskText, taskDate, category, completed }) => {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.setAttribute('data-category', category);

    newTask.innerHTML = `
        <input type="checkbox" ${completed ? 'checked' : ''} onclick="toggleTask(this)">
        <h3>${taskText}</h3>
        <span class="category-label category-${category}">${category}</span>
        <span>${taskDate}</span>
        <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
    `;
    document.getElementById('task-list').appendChild(newTask);
});
}


window.onload = function() {
    updateDate();
    loadTasks();
}