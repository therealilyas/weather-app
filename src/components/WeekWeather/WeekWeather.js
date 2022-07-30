import React from "react";
import "./week.css";
import DailyWeather from "../WeekComponent/DailyWeather";

export default function WeekWeather({ daysArr }) {
  console.log({ daysArr });

  return (
    <div className="grid-2 cont-block">
      <div className="padd-block">
        <h3>Haftalik ob-havo ma'lumoti</h3>
      </div>

      <table className="weather-table">
        <tbody>
          <tr>
            <th className="weather-row-day">Kun</th>
            <th className="weather-row-day-short">Kun</th>
            <th colSpan="2">Harorat</th>
            <th className="weather-row-desc">Tavsif</th>
            <th className="weather-row-pop">Yog'ingarchilik</th>
          </tr>

          {daysArr.map((day, index) => (
            <DailyWeather day={day} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
