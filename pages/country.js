import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import styles from "../styles/Country.module.css";
import numeral from "numeral";
import Link from "next/link";

function Country({ countryInfo }) {
  const [country, setCountry] = useState(countryInfo);
  useEffect(() => {
    setCountry(countryInfo);
  }, []);

  return (
    <div className={styles.country}>
      <Link href="/">
        <a className={styles.country__btn}>
          <ArrowBackIcon /> <span>Back</span>
        </a>
      </Link>
      <div className={styles.country__image}>
        <img src={country.flag} alt="flag-country" />
      </div>

      <div className={styles.country__details}>
        <h3>{country.name}</h3>
        <div>
          <p>
            <bold>Population: </bold>
            {numeral(country.population).format("0,0")}
          </p>
          <p>
            <bold>Region: </bold>
            {country.region}
          </p>
          <p>
            <bold>Sub Region: </bold>
            {country.subregion}
          </p>
          <p>
            <bold>Capital: </bold>
            {country.capital}
          </p>
        </div>

        <div className={styles.country__details2}>
          <p>
            <bold>Top Level Domain: </bold>
            {country.topLevelDomain.map((domain) => (
              <span className={styles.no_arrow_end}>{domain}</span>
            ))}
          </p>
          <p>
            <bold>Currencies: </bold>
            {country.currencies.map((currency) => (
              <span className={styles.no_arrow_end}>{currency.code}</span>
            ))}
          </p>
          <p>
            <bold>Languages: </bold>
            {country.languages.map((language) => (
              <span className={styles.no_arrow_end}>{language.name}</span>
            ))}
          </p>
        </div>
        <div className={styles.country__borders}>
          <h3>Border Countries:</h3>

          {country.borders.map((border) => (
            <span className={styles.country__btn}>{border}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

Country.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${ctx.query.name}`
  );
  const json = await res.json();

  return {
    countryInfo: json[0],
  };
};

export default Country;
