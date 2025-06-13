let URL_WIHOUT_CITY_NAME =
  "http://api.weatherapi.com/v1/current.json?key=2d6605c0bbd6413b89b33713251306&q=hyderabad";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const tempDisplay = document.getElementById("temperature");
const weatherDescription = document.getElementById("description");
const humidityDisplay = document.getElementById("humidity");
const windSpeedDisplay = document.getElementById("wind");
const weatherBox = document.querySelector(".weather-box");

let city = "";
let temperature = "";
let weatherCondition = "";
let humidity = "";
let lastUpdatedWeather = "";
let windSpeed = 0;

searchBtn.addEventListener("click", () => {
  city = cityInput.value;

  const API_URL = `http://api.weatherapi.com/v1/current.json?key=2d6605c0bbd6413b89b33713251306&q=${city}`;

  async function loadWeatherDetails() {
    let response = await fetch(API_URL);
    let data = await response.json();
    temperature = data.current.temp_c;
    weatherCondition = data.current.condition.text;
    lastUpdatedWeather = data.current.last_updated;
    humidity = data.current.humidity;
    windSpeed = data.current.wind_kph;

    weatherBox.classList.remove("hidden");

    cityName.innerHTML = city;
    tempDisplay.innerHTML = temperature;
    weatherDescription.innerHTML = weatherCondition;
    humidityDisplay.innerHTML = humidity;
    windSpeedDisplay.innerHTML = windSpeed;
  }

  if (city.length != 0) {
    loadWeatherDetails();
  } else {
    console.log("city is not entered");
  }
});
