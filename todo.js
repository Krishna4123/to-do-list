/*function clearDisplay(){
    document.querySelector(".new.list").value=" ";
}

function addtask(){
    let taskinput=document.querySelector(".new.list").value;
    if(taskinput){
        let newTask=document.createElement("li");
          newTask.textContent = taskInput;
          document.getElementById("taskList").appendChild(newTask);
          clearDisplay();

    } else {
        alert("Please enter a task to add.");
      }

}*/
  function clearDisplay() {
    document.querySelector(".new.list").value = "";
  }
  function addTask() {
    let taskInput = document.querySelector(".new.list").value;
    if (taskInput) {
      let newTask = document.createElement("li");
      newTask.textContent = taskInput;
      let deleteButton = document.createElement("button");
          deleteButton.textContent = "delete";
          deleteButton.onclick = function() {
            newTask.parentElement.removeChild(newTask);
          };
          newTask.appendChild(deleteButton)
      document.getElementById("taskList").appendChild(newTask);
      clearDisplay();
    } else {
      alert("Please enter a task to add.");
    }
  }
  function markCompleted(taskElement) {
    taskElement.style.textDecoration = "line-through";
    taskElement.parentElement.removeChild(taskElement);
    document.querySelector(".tasks").appendChild(taskElement);
  }