const form = document.querySelector(".js-nameForm"),
  input = form.querySelector("input");

function makeName(name) {
  input.remove();
  const welcome = document.createElement("h3");
  welcome.innerHTML = `Hello, ${name}!`;
  form.appendChild(welcome);
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("currentUser", input.value);
  makeName(input.value);
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser === null) {
    askForName();
  } else {
    makeName(currentUser);
  }
}

loadName();
