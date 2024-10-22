<<<<<<< HEAD
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
}


function addTask() {
    const taskList = document.getElementById('task-list');
    const taskText = prompt("Podaj nazwę zadania:");
    const taskDateInput = document.getElementById('task-date').value;

    
    if (taskText) {
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        
        const taskDate = taskDateInput ? taskDateInput : "Today";

        newTask.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <h3>${taskText}</h3>
            <span>${taskDate}</span>
            <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
        `;
        taskList.appendChild(newTask);
    }
}


function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
}


window.onload = function() {
    updateDate();
=======
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
}


function addTask() {
    const taskList = document.getElementById('task-list');
    const taskText = prompt("Podaj nazwę zadania:");
    const taskDateInput = document.getElementById('task-date').value;

    
    if (taskText) {
        const newTask = document.createElement('div');
        newTask.classList.add('task');

        
        const taskDate = taskDateInput ? taskDateInput : "Today";

        newTask.innerHTML = `
            <input type="checkbox" onclick="toggleTask(this)">
            <h3>${taskText}</h3>
            <span>${taskDate}</span>
            <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
        `;
        taskList.appendChild(newTask);
    }
}


function deleteTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
}


window.onload = function() {
    updateDate();
>>>>>>> f4fc022e383121034e756a9176d44a32ba64f900
};