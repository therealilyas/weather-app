import React from "react";
import "./week.css";
import DailyWeather from "../DailyWeather/DailyWeather";

export default function WeekWeather({ daysArr }) {
  return (
    <div className="grid-2 cont-block">
      <div className="padd-block">
        <h3>Weekly Weather Forecast</h3>
      </div>

      <table className="weather-table">
        <tbody>
          <tr>
            <th className="weather-row-day">Day</th>
            <th className="weather-row-day-short">Day</th>
            <th colSpan="2">Temp</th>
            <th className="weather-row-desc">Description</th>
            <th className="weather-row-pop">Humidity</th>
          </tr>

          {daysArr.map((day, index) => (
            <DailyWeather day={day} index={index} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
