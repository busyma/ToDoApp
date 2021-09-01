const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

// if(todos)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    todoEl.addEventListener("contextmenu", () => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);

    input.value = " ";

    updateLS();
  }
});

function updateLS() {
  const todosEL = document.querySelectorAll("li");

  const todos = [];

  todosEL.forEach((todoEL) => {
    todos.push({
      text: todoEL.innerText,
      completed: todoEL.classList.contains("completed"),
    });
  });
  localStorage.setItem("notes", JSON.stringify(todos));
}
