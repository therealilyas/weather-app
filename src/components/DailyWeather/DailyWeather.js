import React from "react";
import "./daily.css";

function DailyWeather({ day, index }) {
  return (
    <tr>
      <td className="weather-row-day">
        <strong>Day {index}</strong>
      </td>

      <td className="weather-row-forecast-icon">
        <span title="#">
          <img
            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
            title={day.weather[0].description}
            alt="text"
          />
        </span>
      </td>
      <td className="weather-row-forecast">
        <span className="forecast-day">+{Math.floor(day.feels_like.day)}°</span>
        <span className="forecast-night">
          +{Math.floor(day.feels_like.night)}°
        </span>
      </td>
      <td className="weather-row-desc">{day.weather[0].description}</td>
      <td className="weather-row-pop">{day.humidity}%</td>
    </tr>
  );
}

export default DailyWeather;
