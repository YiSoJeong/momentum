const weather = document.querySelector(".js-weather");

const API_KEY = "45db923cab8749cdf475b90ad8f8ad3a";
const COORDS = "coords";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(json => {
      const temp = json.main.temp;
      const place = json.name;
      weather.innerText = `${temp} @ ${place}`;
    });
};

const saveCoords = coordsObj => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSuccess = position => {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // ket 와 value 동일
  const coordsObj = { latitude, longitude };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

const handleGeoError = () => {
  console.log("err");
};

const askForCoords = () => {
  // [Deprecation] getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS.
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
};

const initWeather = () => {
  loadCoords();
};

initWeather();
