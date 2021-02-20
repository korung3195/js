const z = document.querySelector(".main-screen__title");

function fixTitle(event) {
  //z.className = `${z.className} clicked`;
  z.classList.toggle("clicked");
}

z.addEventListener("click", fixTitle);
