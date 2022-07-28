import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import WeekWeather from "./components/WeekWeather/WeekWeather";
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <TodayWeather />

        <WeekWeather />
      </div>
    </div>
  );
}
