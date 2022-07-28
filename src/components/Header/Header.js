import React from "react";
import "./header.css";
// import TodayWeather from "../TodayWeather/TodayWeather";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="https://obhavo.uz" title="Ob-havo.uz">
            <img
              src="https://obhavo.uz/images/pogoda-logo-uz.png"
              height="50"
            />
          </a>
        </div>
      </div>

      {/* <ul className="regions-link">
        <li>
          <a href="https://obhavo.uz/tashkent" className="selected">
            Toshkent
          </a>
        </li>
        <li>
          <a href="https://obhavo.uz/andijan">Andijon</a>
        </li>
        <li>
          <a href="https://obhavo.uz/bukhara">Buxoro</a>
        </li>
        <li>
          <a href="https://obhavo.uz/gulistan">Guliston</a>
        </li>
        <li>
          <a href="https://obhavo.uz/jizzakh">Jizzax</a>
        </li>
        <li>
          <a href="https://obhavo.uz/zarafshan">Zarafshon</a>
        </li>
        <li>
          <a href="https://obhavo.uz/karshi">Qarshi</a>
        </li>
        <li>
          <a href="https://obhavo.uz/navoi">Navoiy</a>
        </li>
        <li>
          <a href="https://obhavo.uz/namangan">Namangan</a>
        </li>
        <li>
          <a href="https://obhavo.uz/nukus">Nukus</a>
        </li>
        <li>
          <a href="https://obhavo.uz/samarkand">Samarqand</a>
        </li>
        <li>
          <a href="https://obhavo.uz/termez">Termiz</a>
        </li>
        <li>
          <a href="https://obhavo.uz/urgench">Urganch</a>
        </li>
        <li>
          <a href="https://obhavo.uz/ferghana">Farg'ona</a>
        </li>
        <li>
          <a href="https://obhavo.uz/khiva">Xiva</a>
        </li>
      </ul> */}
    </>
  );
}
