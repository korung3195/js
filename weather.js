const API = "91bdfd425e729c7cacc773a159f12ab9";
const weather = document.querySelector(".weather");

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${Math.round(temperature)}℃,  ${place}`;
    });
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  localStorage.setItem("coords", JSON.stringify(coordsObj));
  getWeather(latitude, longitude);
}

function handleGeoFail() {
  console.log("Cannot get current location");
}

function askForCoords() {
  const location = navigator.geolocation.getCurrentPosition(
    handleGeoSuccess,
    handleGeoFail
  );
}

function loadCoords() {
  if (localStorage.getItem("coords") === null) {
    askForCoords();
  } else {
    const coordsObj = JSON.parse(localStorage.getItem("coords"));
    getWeather(coordsObj.latitude, coordsObj.longitude);
  }
}

function init() {
  loadCoords();
}

init();
