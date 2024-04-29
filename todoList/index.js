let todoList = localStorage.getItem("todoList") ? 
                JSON.parse(localStorage.getItem("todoList")) : [] ;

// JSON.stringify(todoList) => todoList 변수에 담긴 배열 요소를 String(문자열)로 변환
// JSON.parse(localStorage.getItem("todoList")) => localStorage.getItem("todoList")에 저장된 String 데이터를 배열요소로 변환
// localStorage.setItem("todoList",JSON.stringify(todoList)) => localStorage 영역에 key, value 형태로 데이터 저장
// localStorage.getItem("todoList") => localStorage 영역에 데이터를 key로 불러오는 것

window.onload = function() {
    drawTodoList();
}

// 할 일을 todoList태그에 넣어주기
function addTodo() {
    //input 요소 가져오기
    const searchInput = document.querySelector("#search-bar input");
    todoList.push({
        title: searchInput.value,
        date: new Date().getTime(),
        isDone: false
    });

    searchInput.value = "";
    localStorage.setItem("todoList",JSON.stringify(todoList));
    drawTodoList();
}

//할 일 목록을 ui에 그려주기
function drawTodoList() {
    console.log(todoList);
    function removeTodo(removeTodo) {
        //todoList에서 removeTodo와 같은 데이터 삭제
        todoList = todoList.filter(t => (removeTodo.date !== t.date && removeTodo.title !== t.title)); // 반환값이 true인 데이터만 남기고 전부 삭제된 배열 반환
        localStorage.setItem("todoList",JSON.stringify(todoList));
        drawTodoList();
    }

    const toggleStatus = function(targetTodo) {
        todoList = todoList.map(t => {
            if(t.date === targetTodo.date) {
                t.isDone = !t.isDone;
            }
            return t;
        })
        localStorage.setItem("todoList",JSON.stringify(todoList));
        drawTodoList();
    }

    //ul 요소 가져오기
    const todoUl = document.querySelector('.todo-list');
    todoUl.innerHTML = "";
    for(let todo of todoList) {

        const todoLi = document.createElement('li');
        todoLi.className = todo.isDone ? "done" : "";
        todoLi.innerHTML = todo.title;
        todoUl.appendChild(todoLi);

        const removeBtn = document.createElement('div');
        removeBtn.className='todo-remove-btn';
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        todoLi.appendChild(removeBtn);

        todoLi.onclick = function(e) {
            toggleStatus(todo);
        }

        removeBtn.onclick = function() {  
            //todoList 안에 있는 데이터 지우기
            removeTodo(todo);
            // ui에서 todoLi 지우기
            // this.parentNode.remove();
        }

        // todoUl.innerHTML += `<li>${todo.title}
        //     <div class="todo-remove-btn"><i class="fa-solid fa-xmark"></i></div></li>`
    }
}