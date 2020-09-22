import React, { useEffect, useState } from "react";
import styles from "../styles/FlagCard.module.css";
import numeral from "numeral";

function FlagCard({ country }) {
  return (
  
    <div className={styles.FlagCard}>
      <div className={styles.FlagCard__image}>
        <img src={country.flag} alt="flag-country" />
      </div>

      <div className={styles.FlagCard__details}>
        <h3>{country.name}</h3>
        <p>
          <bold>Population: </bold>
          {numeral(country.population).format("0,0")}
        </p>
        <p>
          <bold>Region: </bold>
          {country.region}
        </p>
        <p>
          <bold>Capital: </bold>
          {country.capital}
        </p>
      </div>
    </div>
    
  );
}

export default FlagCard;
