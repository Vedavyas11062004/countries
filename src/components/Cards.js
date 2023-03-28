import React from "react";
import '../styles/cards.css'

export default function Cards({ img, name, population, region, capital }) {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img alt="flag" src={img}></img>
        </div>
        <div className="content">
          <span className="heading__card">{name}</span>
          <ul>
            <li>
              <span>
                <label>Population:</label>
                {population}
              </span>
            </li>
            <li>
              <span>
                <label>Region:</label>
                {region}
              </span>
            </li>
            <li>
              <span>
                <label>Capital:</label>
                {capital}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
