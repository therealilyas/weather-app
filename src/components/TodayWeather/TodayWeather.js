import React from "react";
import "./today.css";

export default function TodayWeather({
  weatherData,
  currentData,
  month,
  imgData,
  weatherDesc,
}) {
  return (
    <>
      <div className="grid-1 cont-block">
        <div className="padd-block">
          <h2>{weatherData.timezone}</h2>
          <div className="current-day">
            Today, {new Date().getDate()} {month}
          </div>

          <div className="current-forecast">
            <span>
              <img src={`http://openweathermap.org/img/w/${imgData}.png`} />
            </span>
            <span>
              <strong>+{Math.floor(currentData.temp)}°</strong>
            </span>
            <span>+{Math.floor(currentData.feels_like)}°</span>
          </div>

          <div className="current-forecast-desc">{weatherDesc}</div>

          <div className="current-forecast-details">
            <div className="col-1">
              <p>Humidity: {currentData.humidity}%</p>
              <p>Wind Speed: {currentData.wind_speed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
