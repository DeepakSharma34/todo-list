const todoList = []

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
        " class="delete-todo-button">Delete</button>
        </div>` ;
        todoListHtml = todoListHtml + html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
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
    data.value = '';
}

