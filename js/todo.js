const toDoForm = document.querySelector("form#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "삭제";
    li.appendChild(button);
    toDoList.appendChild(li);
}

function onSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
    // localStorage.setItem("todo", newToDo);
}

toDoForm.addEventListener("submit", onSubmit);
// toDoList.appendChild()