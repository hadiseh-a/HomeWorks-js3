function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.]
  todos.forEach((todo) => {
    add(todo);
    click();
  });
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
let lengthTodos = todos.length;
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  todos.push({
    task: event.target.parentElement.parentElement.todoInput.value,
    completed: false,
  });
  lengthTodos++;
  add(todos[todos.length - 1]);
  event.target.parentElement.parentElement.todoInput.value = "";
  click();
}
function add(todo) {
  let list = document.getElementById("todo-list");
  const liElement = document.createElement("li");
  liElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  liElement.innerHTML = `${todo.task}<span class="badge bg-primary rounded-pill">
  <i class="fa fa-check" aria-hidden="true"></i>
  <i class="fa fa-trash" aria-hidden="true"></i>
</span>`;
  list.append(liElement);
}
function click() {
  const done = document.querySelectorAll(".fa-check");
  const trash = document.querySelectorAll(".fa-trash");
  const list = document.querySelector("ul");
  console.log(list.childElementCount);
  for (let i = 0; i < list.childElementCount; i++) {
    done[i].addEventListener("click", () => {
      done[i].parentElement.parentElement.style.textDecoration = "line-through";
    });
    trash[i].addEventListener("click", () => {
      trash[i].parentElement.parentElement.remove();
    });
  }
}
// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
