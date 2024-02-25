let todoList = JSON.parse(localStorage.getItem('todoList'));

if(!todoList){
    todoList = [{
        name : 'make dinner',
        dueDate : '2024-12-22'
    },
    {
        name: 'wash dishes',
        dueDate : '2024-12-22'
    }
    ];
}

function saveToStorage() {
    localStorage.setItem('todoList' , JSON.stringify(todoList));
}
function renderTodolist(){
    let todoListHtml = '';
    for (let i = 0 ; i<todoList.length ; i++) {
        const todoObject = todoList[i]; 
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div class="grid">
        <div class="js-name">${name}</div>
        <div class="js-name"> Date : ${dueDate}</div>
        <button onclick="
             todoList.splice(${i} , 1);
             renderTodolist(); 
             saveTostorage();
        " class="delete-todo-button">Complete</button>
        </div>` ;
        todoListHtml = todoListHtml + html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
    saveToStorage();
}

function addTodo(){
    const data = document.querySelector('.js-data');
    const name = data.value;
    const date = document.querySelector('.js-date');
    const dueDate = date.value;
    

    todoList.push({
        name,dueDate
     });

    renderTodolist();
    saveToStorage();
   data.value = '';
}

