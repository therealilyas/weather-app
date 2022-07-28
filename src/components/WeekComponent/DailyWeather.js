import React from "react";

function DailyWeather(props) {
  return (
    <tr>
      <td className="weather-row-day  weekend ">
        <strong>Ertaga</strong>
        <div>24 iyul</div>
      </td>
      <td className="weather-row-day-short  weekend ">
        <strong>{props}</strong>
        <div>24 iyul</div>
      </td>
      <td className="weather-row-forecast-icon">
        <span title="#">
          <img
            src="https://obhavo.uz/images/icons/clear.png"
            title="Ochiq havo"
          />
        </span>
      </td>
      <td className="weather-row-forecast">
        <span className="forecast-day">+44°</span>
        <span className="forecast-night">+28°</span>
      </td>
      <td className="weather-row-desc">ochiq havo</td>
      <td className="weather-row-pop">0%</td>
    </tr>
  );
}

export default DailyWeather;
