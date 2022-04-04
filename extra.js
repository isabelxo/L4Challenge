///
function formatDate(date) {
  let something = date.getHours();
  if (something < 10) {
    something = `0${something}`;
  }

  let currentMin = date.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  let getDay = date.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[getDay];
  return `${currentDay} ${something}:${currentMin}`;
}
let h5 = document.querySelector("#change-date");
let currentTime = new Date();
h5.innerHTML = formatDate(currentTime);

//////HW  week 5

function displayWeather(response) {
  console.log(response);
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function changeCity(event) {
  event.preventDefault();
  let apiKey = "84919b6ce50d5f3343257ed5591f46ea";
  let apiEnd = `https://api.openweathermap.org/data/2.5/weather`;
  let units = "metric";
  let city = document.querySelector("#search-button").value;
  let apiUrl = `${apiEnd}?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", changeCity);
