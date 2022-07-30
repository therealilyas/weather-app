import React, { useState } from "react";
import "./week.css";
// import DailyWeather from "./../DailyWeather/DailyWeather";

export default function WeekWeather() {
  const apiKey = "9adddd3995c8b831d0c5d26a434a1aab";
  const [daysArr, setDaysArr] = useState([]);

  window.onload = function () {
    getDailyWeather();
    showData();
  };
  const getDailyWeather = () => {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Data", data);
          // console.log("Daily Data", data.daily);
          daysArr.push(data.daily);

          // setDaysArr((current) => [...current, data.daily]);

          data.daily.map((day, index) => {
            let { temp, humidity, wind_speed, feels_like } = day;
            console.log({
              Day: index,
              temp: temp,
              temp_day: temp.day,
              temp_night: temp.night,
              humidity: humidity,
              wind_speed: wind_speed,
              feels_like: feels_like,
              feels_day: feels_like.day,
              feels_night: feels_like.night,
            });
          });
        });
    });
  };

  const showData = () => {
    console.log("Daily Data", daysArr);
    console.log("Daily Data Lenght", daysArr.length);
    console.log("Daily Data TypeOf", Array.isArray(daysArr));
  };
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div className="grid-2 cont-block">
      <div className="padd-block">
        <h3>Haftalik ob-havo ma'lumoti</h3>
      </div>
      {names.map((name, i) => (
        <h2 key={i}>{name}</h2>
      ))}

      <table className="weather-table">
        <tbody>
          <tr>
            <th className="weather-row-day">Kun</th>
            <th className="weather-row-day-short">Kun</th>
            <th colSpan="2">Harorat</th>
            <th className="weather-row-desc">Tavsif</th>
            <th className="weather-row-pop">Yog'ingarchilik</th>
          </tr>

          {/* {dailyData.map((day, index) => {
            <DailyWeather day={day} key={index} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
}
