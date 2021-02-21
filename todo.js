const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

var toDos = [];

function del(event) {
  const target = event.target.parentNode;
  const id = parseInt(target.getAttribute("id"));
  toDos = toDos.filter(function (toDo) {
    return toDo.id !== id;
  });
  target.remove();
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function paintToDo(text, id) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", del);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);

  li.id = id;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: id,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, Date.now());
  toDoInput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem("toDos");
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.id);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
