const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const USER_LS = "currentUser";

function handleSubmit(event) {
  event.preventDefault();
  localStorage.USER_LS = input.value;
}

function askForName() {
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {
    askForName();
  }
}

loadName();
