document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");
    const taskList = document.getElementById("task-list");
  
    taskForm.addEventListener("submit", addTask);
  
    function addTask(event) {
      event.preventDefault();
      
      const taskText = taskInput.value.trim();
      const taskDueDate = taskDate.value;
  
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      
      taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="task-date">${new Date(taskDueDate).toLocaleString()}</span>
        <div class="actions">
          <button onclick="editTask(this)">Edit</button>
          <button onclick="toggleComplete(this)">Complete</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = "";
      taskDate.value = "";
    }
  
    window.toggleComplete = (button) => {
      const taskItem = button.closest("li");
      taskItem.classList.toggle("completed");
    };
  
    window.editTask = (button) => {
      const taskItem = button.closest("li");
      const taskText = taskItem.querySelector(".task-text");
      const newText = prompt("Edit your task:", taskText.textContent);
      if (newText) {
        taskText.textContent = newText;
      }
    };
  
    window.deleteTask = (button) => {
      const taskItem = button.closest("li");
      taskItem.remove();
    };
  });
  