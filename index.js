let state = [
  { text: "Go shopping", completed: true },
  { text: "Go to the gym", completed: true },
  { text: "Go to the movies", completed: false },
  { text: "Clean the house", completed: false },
];

function render() {
  document.body.textContent = "";

  let mainEl = document.createElement("main");

  let sectionOneEl = document.createElement("section");
  let h2El = document.createElement("h2");
  h2El.className = "title";
  h2El.textContent = "OPTIONS";
  let labelEl = document.createElement("label");
  let checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";

  document.body.appendChild(mainEl);
  sectionOneEl.append(h2El, labelEl);
  labelEl.append("Show completed", checkboxEl);

  let sectionTwoEl = document.createElement("section");
  let h2El2 = document.createElement("h2");
  h2El2.className = "title";
  h2El2.textContent = "ADD ITEM";
  let formEl = document.createElement("form");
  formEl.className = "add-item";
  let inputEl = document.createElement("input");
  inputEl.className = "text-input";
  inputEl.type = "text";
  inputEl.name = "text";
  inputEl.required = true;
  inputEl.minlength = 3;
  let buttonEl = document.createElement("button");
  buttonEl.type = "submit";
  buttonEl.textContent = "Add";
  formEl.append(inputEl, buttonEl);
  sectionTwoEl.append(h2El2, formEl);
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let newtodo = { text: formEl.text.value, completed: false };
    formEl.reset();
    renderToDo(newtodo);
  });

  let sectionThreeEl = document.createElement("section");
  let h2El3 = document.createElement("h2");
  h2El3.className = "title";
  h2El3.textContent = "TODO";
  let ulEl = document.createElement("ul");
  ulEl.className = "todo-list";
  sectionThreeEl.append(h2El3, ulEl);

  let sectionFourEl = document.createElement("section");
  let h2El4 = document.createElement("h2");
  h2El4.className = "title";
  h2El4.textContent = "COMPLETED";
  let ulEl2 = document.createElement("ul");
  ulEl2.className = "completed-list";

  sectionFourEl.append(h2El4, ulEl2);

  mainEl.append(sectionOneEl, sectionTwoEl, sectionThreeEl, sectionFourEl);
}

function renderToDo(todo) {
  let ulEl = document.querySelector(".todo-list");

  let liEl = document.createElement("li");
  liEl.className = "todo";
  let divEl = document.createElement("div");
  divEl.className = "completed-section";
  let inputEl = document.createElement("input");
  inputEl.className = "completed.checkbox";
  inputEl.type = "checkbox";
  inputEl.addEventListener("click", function () {
    todo.completed = !todo.completed;
    ulEl.removeChild(liEl);
    completedToDo(todo);
  });
  divEl.append(inputEl);
  let divEl2 = document.createElement("div");
  divEl2.className = "text-section";
  let pEl = document.createElement("p");
  pEl.className = "text";
  pEl.textContent = todo.text;
  divEl2.append(pEl);
  let divEl3 = document.createElement("div");
  divEl3.className = "button-section";
  let buttonEl = document.createElement("button");
  buttonEl.className = "delete";
  buttonEl.textContent = "Delete";
  buttonEl.addEventListener("click", function () {
    ulEl.removeChild(liEl);
  });

  divEl3.append(buttonEl);
  liEl.append(divEl, divEl2, divEl3);
  ulEl.append(liEl);
}

function completedToDo(todo) {
  let ulEl = document.querySelector(".completed-list");
  let liEl = document.createElement("li");
  liEl.className = "todo completed";
  let divEl = document.createElement("div");
  divEl.className = "completed-section";
  let inputEl = document.createElement("input");
  inputEl.className = "completed-checkbox";
  inputEl.type = "checkbox";
  divEl.append(inputEl);
  let divEl2 = document.createElement("div");
  divEl2.className = "text-section";
  let pEl = document.createElement("p");
  pEl.className = "text";
  pEl.textContent = todo.text;
  divEl2.append(pEl);
  let divEl3 = document.createElement("div");
  divEl3.className = "button-section";
  let buttonEl = document.createElement("button");
  buttonEl.className = "delete";
  buttonEl.textContent = "Delete";
  buttonEl.addEventListener("click", function () {
    ulEl.removeChild(liEl);
  });
  divEl3.append(buttonEl);
  liEl.append(divEl, divEl2, divEl3);
  ulEl.append(liEl);
  todo.completed === true
    ? (inputEl.checked = true)
    : (inputEl.checked = false);
  inputEl.addEventListener("click", function () {
    todo.completed = !todo.completed;
    ulEl.removeChild(liEl);
    renderToDo(todo);
  });
}
render();

for (let todos of state) {
  if (todos.completed === false) renderToDo(todos);
  else completedToDo(todos);
}
