import React from "react";
import "./today.css";

export default function TodayWeather({ weatherData, currentData, month }) {
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
            <h3>Temp: + {currentData.feels_like}°C</h3>
            <h3>Wind Speed: {currentData.wind_speed} km/h</h3>
            <h3>Humidity: {currentData.humidity}%</h3>
          </div>
        </div>
      </div>
    </>
  );
}
