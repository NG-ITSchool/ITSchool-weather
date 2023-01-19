const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const currentCityContainer = document.querySelector(".current-city");

const handleCityClick = city => {
  currentCityContainer.innerText = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  localStorage.setItem("city", city);
};

bucharest.addEventListener("click", () => {
  handleCityClick("București");
});

timisoara.addEventListener("click", () => {
  handleCityClick("Timișoara");
});

oradea.addEventListener("click", () => {
  handleCityClick("Oradea");
});

// Solutie alternativa

// const cityElements = document.querySelectorAll(".dropdown-menu .dropdown-item");

// cityElements.forEach(cityElement => {
//   cityElement.addEventListener("click", () => {
//     handleCityClick(cityElement.innerText);
//   });
// });
