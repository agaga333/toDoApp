/**
 * Created by Agnieszka on 2016-10-26.
 */
var input = document.getElementById("input-text"),
    addBtn = document.getElementById("add-btn"),
    list = document.getElementById("list-box");


var todos = [ ];

function displayToDos() {
    if (todos.length === 0) {
        return;
    }
    var todosList = '<ul>';
    for (var i = 0, len = todos.length; i < len; i++) {
        todosList += '<li>' + todos[i].text + ' ' + '<span class="remove-item" id="' + i + '">X</span>' + '</li>';
    }
    todosList += '</ul>';
    list.innerHTML = todosList;
    var spans = document.getElementsByClassName("remove-item");
    for (var j = 0; j < spans.length; j++) {
        spans[j].addEventListener('click', removeToDo)
    }
}

function addToDo() {
    todos.push({text: input.value});
    displayToDos();
    input.value = '';
    addBtn.disabled = true;
}

addBtn.addEventListener("click", addToDo);

function validateAddBtn() {
    this.value.length === 0 ? addBtn.disabled = true : addBtn.disabled = false; //skrót na if, else
}

input.addEventListener("keyup", validateAddBtn);


function removeToDo() {
    var id = parseFloat(this.getAttribute('id'));
    console.log("typ id to ", typeof(id));
    todos.splice(id,1);
    displayToDos();
    return false;
}

function addBackground(){
    this.style.backgroundColor = 'green';
}

function setBackgroundColorForDuties(){
    var description = document.getElementsByClassName("duties-description");
    for (var i = 0; i < description.length; i++) {
    description[i].addEventListener('click', addBackground);
    }
}

function init() {
    displayToDos();
    addProperty();
}

init();