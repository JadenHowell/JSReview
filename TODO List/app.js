//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todos');

//Event listeners
document.addEventListener('DOMContentLoaded', loadTodos)
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

//Functions
function addTodo(event){
    event.preventDefault(); //dont let submit

    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add todo to localStorage
    saveTodo(todoInput.value);

    //completed button
    const completeButton = document.createElement("button");
    completeButton.innerHTML='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value = ""; //clear input value
}

function deleteCheck(e){
    const item = e.target;

    //delete check
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall"); //this activate the css animation
        removeLocalTodo(todo);
        todo.addEventListener('animationend', () => 
            {
                todo.remove();
            });
    }

    //check mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex";
                } else {
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display="flex";
                } else {
                    todo.style.display="none";
                }
                break;
        }
    });
}

function saveTodo(todo) {
    //check if already saved list exists
    let todos = getLocalTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let todos=getLocalTodos();
    
    todos.forEach(function(todo){
        //create todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //completed button
        const completeButton = document.createElement("button");
        completeButton.innerHTML='<i class="fas fa-check"></i>';
        completeButton.classList.add("complete-btn");
        todoDiv.appendChild(completeButton);

        //delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML='<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-btn");
        todoDiv.appendChild(deleteButton);

        //append to list
        todoList.appendChild(todoDiv);
    })
}

function getLocalTodos() {
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}

function removeLocalTodo(todo){
    let todos = getLocalTodos();
    const index = todos.indexOf(todo.children[0].innerText);
    todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(todos));
}