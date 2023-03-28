import React, { useState, useContext } from "react";
import search from "../Asserts/search.svg";
import arrow from "../Asserts/chevron-down.svg";
import "../styles/search.css";
import { context } from "../App";

export default function Searchbar({ setSearch }) {
  const [drop, setDrop] = useState("disapper");
  const val = useContext(context);
  const [setval, setVal] = useState("");
  function handleDrop() {
    if (drop === "disapper") {
      setDrop("active");
    } else {
      setDrop("disapper");
    }
  }

  return (
    <div className="search__Box">
      <div className="search__container">
        <img src={search} alt="search"></img>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            val.setState({
              type: "setSearch",
              value: e.target.value,
            });
          }}
        ></input>
      </div>
      <div className="filter__container">
        <div className="dropDown" onClick={handleDrop}>
          <button>Filter by Region</button>
          <img src={arrow} alt="arrow"></img>
        </div>
        <ul className={drop}>
          <li
            onClick={() => {
              val.setState({
                type: "setRegion",
                value: "Asia",
              });
            }}
          >
            Asia
          </li>
          <li
            onClick={() => {
              val.setState({
                type: "setRegion",
                value: "Africa",
              });
            }}
          >
            Africa
          </li>
          <li
            onClick={() => {
              val.setState({
                type: "setRegion",
                value: "America",
              });
            }}
          >
            America
          </li>
          <li
            onClick={() => {
              val.setState({
                type: "setRegion",
                value: "Europe",
              });
            }}
          >
            Europe
          </li>
          <li
            onClick={() => {
              val.setState({
                type: "setRegion",
                value: "Oceania",
              });
            }}
          >
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}
