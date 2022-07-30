import React from "react";

function DailyWeather({ day, index }) {
  return (
    <tr>
      <td className="weather-row-day  ">
        <strong>Ertaga</strong>
        <div>24</div>
      </td>
      <td className="weather-row-day-short   ">
        {/* <strong>{props}</strong> */}
        <div>24 iyul</div>
      </td>
      <td className="weather-row-forecast-icon">
        <span title="#">
          <img
            src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
            title="Ochiq havo"
            alt="text"
          />
        </span>
      </td>
      <td className="weather-row-forecast">
        <span className="forecast-day">+{day.feels_like.day}°</span>
        <span className="forecast-night">+{day.feels_like.night}°</span>
      </td>
      <td className="weather-row-desc">{day.weather[0].description}</td>
      <td className="weather-row-pop">{day.humidity}%</td>
    </tr>
  );
}

export default DailyWeather;
