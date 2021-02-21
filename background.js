const body = document.querySelector("body");

const IMG_NUMBER = 4;

function makeRandom(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function init() {
  const image = new Image();
  const num = makeRandom(IMG_NUMBER);
  image.src = `img/${num + 1}.jpg`;
  image.classList.add("background");
  body.appendChild(image);
}

init();
