const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";

let todos = [];

const deleteTodo = event => {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter(todo => todo.id !== parseInt(li.id));
  todos = cleanTodos;
  saveTodos();
};

// javascript는 localstorage에 모든 데이터를 string으로 저장하려고 함
const saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
};

const paintTodo = text => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    id: newId,
    text: text
  };
  todos.push(todoObj);
  saveTodos();
};

const handleTodoSubmit = event => {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
};

const loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    // console.log(loadedTodos);
    const parsedTodos = JSON.parse(loadedTodos);
    // console.log(parsedTodos);
    parsedTodos.forEach(todo => paintTodo(todo.text));
  }
};

const initTodo = () => {
  loadTodos();
  todoForm.addEventListener("submit", handleTodoSubmit);
};

initTodo();
