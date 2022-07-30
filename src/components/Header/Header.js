import React from "react";
import "./header.css";
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
    </>
  );
}
