const content = document.querySelector("#content");
// const form = document.createElement("form");
// content.append(form);
// const label = document.createElement("label");
// label.setAttribute("for", "todo");
// label.innerText = "Add your work :";
// form.append(label);
// const input = document.createElement("input");
// input.setAttribute("type", "text");
// input.setAttribute("name", "todo");
// form.append(input);
// const button = document.createElement("button");
// form.append(button);
// button.innerHTML = "add";
const ulist = document.createElement("ul");
content.append(ulist);
function todoList(todos) {
  // Write your code here...
  for (const doing of todos) {
    const li = document.createElement("li");
    ulist.append(li);
    li.innerText = doing.todo;
    done(li);
  }
}
function done(doing){
  doing.addEventListener("click",()=>
  {
    doing.classList.toggle("lineThrough");
  })
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
