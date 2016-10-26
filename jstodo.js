/**
 * Created by Agnieszka on 2016-10-26.
 */
var input = document.getElementById("input-text"),
    addBtn = document.getElementById("add-btn"),
    list = document.getElementById("list-box");

var todos = [ {text: "Clean the toilet"}, {text: "Wash the dishes"}, {text: "Sweep the floor"} ];

list.innerHTML = '<ul><li>Aga</li><li>Tomek</li></ul>'

function displayToDos() {
    var todosList = '<ul>';
    for (i = 0; len = todos.length, i < len; i++) {
        todosList += '<li>' + todos[i].text + '</li>';
    }
    todosList += '</ul>';
}

console.log(displayToDos());