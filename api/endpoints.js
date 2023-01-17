const API_KEY = "a6980960c34ef6deabb0a5377d224f1f";

const BASE_API_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeatherEndpoint = city => {
  return `${BASE_API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};

const getForecastEndpoint = city => {
  return `${BASE_API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};
