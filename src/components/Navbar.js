import React, { useState } from "react";
import moon from "../Asserts/moon.svg";
import "../styles/navbar.css";

export default function Navbar() {
  const [mode, setmode] = useState("Dark Mode");
  return (
    <div className="nav">
      <div className="nav__ele">
        <div className="nav__left">Where in the world ?</div>
        <div className="nav__right">
          <img src={moon} alt="toggle-mode"></img>
          <p>{mode}</p>
        </div>
      </div>
    </div>
  );
}
