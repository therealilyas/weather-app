import React, { useState } from "react";
function Data() {
  const apiKey = "9adddd3995c8b831d0c5d26a434a1aab";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get the weather of.</p>
        </div>
      ) : (
        <div>
          <p className="weather-data">{weatherData.name}</p>
          <p>
            {Math.floor((Math.round(weatherData.main.temp) - 32) * (5 / 9))}°C
          </p>
          <p>{weatherData.weather[0].main}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.wind.speed}</p>
        </div>
      )}
    </div>
  );
}

export default Data;