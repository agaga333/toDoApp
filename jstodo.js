/**
 * Created by Agnieszka on 2016-10-26.
 */
var input = document.getElementById("input-text"),
    addBtn = document.getElementById("add-btn"),
    list = document.getElementById("list-box");
    removeSpan = document.getElementsByClassName("remove-item")

var todos = [ ];

function displayToDos() {
    var todosList = '<ul>';
    if (todos.length === 0) {
        return;
    }
    for (var i = 0, len = todos.length; i < len; i++) {
        todosList += '<li>' + todos[i].text + ' ' + '<span class="remove-item" id="' + i + '">X</span>' + '</li>';
    }
    todosList += '</ul>';
    var spans = removeSpan;
    for (var i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', removeToDo)
    }
    list.innerHTML = todosList;
}

function addToDo() {
    todos.push({text: input.value});
    displayToDos();
    input.value = '';
    addBtn.disabled = true;
}

addBtn.addEventListener("click", addToDo);

function validateAddBtn() {
    if (this.value.length === 0) {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }
}

input.addEventListener("keyup", validateAddBtn);


function removeToDo() {
    var id = this.getAttribute('id');
    todos.splice(id,1);
    displayToDos();
}

function init() {
    displayToDos();
}

init();