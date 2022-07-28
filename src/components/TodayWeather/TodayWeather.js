import React, { useState } from "react";
import "./today.css";

export default function TodayWeather() {
  const apiKey = "9adddd3995c8b831d0c5d26a434a1aab";
  const dataMonth = new Date().getMonth();
  const [weatherData, setWeatherData] = useState([{}]);
  const [currentData, setCurrentData] = useState([{}]);

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setCurrentData(data.current);

          console.log("Data", data);
          console.log("Current Data", currentData);
          console.log("Weather Data", weatherData);
        });
    });
  };
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthArr[dataMonth];
  window.onload = function () {
    getWeather();
  };
  return (
    <>
      <div className="padd-block">
        <div className="grid-1 cont-block">
          <div className="padd-block">
            <div className="current-day">
              <h2>
                Today, {new Date().getDate()} {month}
              </h2>
            </div>
            <hr />
            <br />
            <h3>Location: {weatherData.timezone}</h3>
            <h3>Temp: + {currentData.temp}°C</h3>
            <h3>Wind Speed: {currentData.wind_speed} km/h</h3>
            <h3>Humidity: {currentData.humidity}%</h3>
          </div>
        </div>
      </div>
    </>
  );
}
