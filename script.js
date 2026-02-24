/**
 * Global Selectors & State
 */
const ul = document.querySelector("ul");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
let tasks = [];

/**
 * Data Storage Functions (LocalStorage)
 */
function getTasks() {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : []; 
}

function saveTasks(tasksArray) {
    localStorage.setItem('tasks', JSON.stringify(tasksArray)); 
}

/**
 * API Fetching - Loads initial tasks if storage is empty
 */
async function fetchInitialTasks() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5'); 
        if (!response.ok) throw new Error("Failed to fetch data from API"); 
        
        const data = await response.json(); 

        // Map API data to our application schema
        const apiTasks = data.map(item => ({
            id: Date.now() + Math.random(),
            text: item.title,
            dueDate: new Date().toISOString().split('T')[0], // Default to current date
            completed: item.completed 
        }));

        tasks = [...apiTasks, ...tasks];
        saveTasks(tasks);
        renderTasks();
    } catch (error) {
        console.error("Initialization Error:", error); 
    }
}

/**
 * UI Rendering - Updates the task list based on filters
 */
function renderTasks(filter = 'all') {
    ul.innerHTML = "";
    
    let filteredTasks = tasks;
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.completed); 
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed); 

    filteredTasks.forEach(createTaskElement); 
}

/**
 * Task Element Factory - Creates a single task <li>
 */
function createTaskElement(obj) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const dateSpan = document.createElement("span"); 
    const remove = document.createElement("span");

    // Apply styles if completed
    if (obj.completed) {
        li.classList.add("checked"); 
        input.checked = true;
    }

    // Checkbox Setup
    input.type = "checkbox";
    input.addEventListener("change", () => {
        obj.completed = !obj.completed; 
        li.classList.toggle("checked");
        saveTasks(tasks);
    });

    // Content Setup
    div.innerText = obj.text; 
    div.className = "task-text"; 

    // Date Setup
    dateSpan.className = "task-date"; 
    dateSpan.innerText = obj.dueDate || ""; 

    // Delete Button Setup
    remove.innerHTML = "&times;";
    remove.className = "remove";
    remove.addEventListener("click", () => {
        tasks = tasks.filter(x => x.id !== obj.id); 
        saveTasks(tasks);
        renderTasks();
    });

    li.append(input, div, dateSpan, remove);
    ul.appendChild(li);
}

/**
 * Handle new task creation from form
 */
function addTask() {
    const taskValue = taskInput.value.trim();
    const dateValue = dateInput.value;

    // Validation
    if (taskValue === "" || dateValue === "") { 
        alert("Please fill all fields!");
        return;
    }

    const obj = {
        id: Date.now(),
        text: taskValue, 
        dueDate: dateValue, 
        completed: false, 
    };

    tasks.push(obj); 
    saveTasks(tasks); 
    renderTasks(); 
    
    // Clear inputs
    taskInput.value = "";
    dateInput.value = "";
}

/**
 * Control Button Listeners (Filters & Sorting)
 */
document.getElementById("showAll").onclick = () => {
    tasks.sort((a, b) => a.id - b.id); // Default order
    setActiveButton("showAll");
    renderTasks('all');
};

document.getElementById("showActive").onclick = () => {
    setActiveButton("showActive");
    renderTasks('active');
};

document.getElementById("showCompleted").onclick = () => {
    setActiveButton("showCompleted");
    renderTasks('completed');
};

document.getElementById("sortDate").onclick = () => {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); 
    saveTasks(tasks); 
    setActiveButton("sortDate");
    renderTasks(); 
};

/**
 * Visual feedback for active filter button
 */
function setActiveButton(id) {
    document.querySelectorAll('.controls button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

/**
 * App Initialization
 */
const saved = getTasks(); 
if (saved.length > 0) {
    tasks = saved;
    renderTasks();
} else {
    fetchInitialTasks(); 
}

// Ensure "All" filter is visually active on load
setActiveButton("showAll");