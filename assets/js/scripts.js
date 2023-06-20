function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var li = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);

        li.onclick = function() {
        this.classList.toggle("completed");
        };

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function onEnterKeyPress(event){
    // debugger;
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        addTask();
    }
}