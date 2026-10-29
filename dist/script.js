function domLoaded() {
    let addButton = document.getElementById("addButton").addEventListener("click", addBtnClick);
    let inputBox = document.getElementById("inputBox");
    let taskList = document.getElementById("taskList");

    inputBox.addEventListener("keyup", ) {
        if (.key === "Enter") {
            addBtnClick();
        }
    }
}

function addBtnClick() {
    let textInput = document.getElementById("inputBox");
    let taskText = taskInput.value.trim(); // gets the value fromn the text box

    if (taskText === "") {
        return;
    }

    addTask(taskText);

    taskInput.value = "";
    taskInput.focus();
}

function addTask() {
    let li = document.createElement("li");
    li.innerHTML = tastText + "<span class=\"task-text\">NEW TASK</span><button class=\"done-btn\">&#10006;</button>";
    taskList = document.querySelector("ol").appendChild("li");
}

function removeTask() {
    let li = addButton.parentElement;
    li.remove();
}