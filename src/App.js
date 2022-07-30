import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import WeekWeather from "./components/WeekWeather/WeekWeather";

export default function App() {
  const apiKey = "9adddd3995c8b831d0c5d26a434a1aab";

  const [weatherData, setWeatherData] = useState([{}]);
  const [currentData, setCurrentData] = useState([{}]);
  const dataMonth = new Date().getMonth();

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setWeatherData(data);
          setCurrentData(data.current);
        })
        .catch((err) => {
          console.log({ err });
        });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <TodayWeather
          month={month}
          weatherData={weatherData}
          currentData={currentData}
        />

        {weatherData?.daily && (
          <WeekWeather daysArr={weatherData.daily} month={month} />
        )}
      </div>
    </div>
  );
}
