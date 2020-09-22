import styles from "../styles/Home.module.css";
import Input from "../components/Input.js";
import Select from "../components/Select.js";
import FlagCard from "../components/FlagCard.js";
import fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home({ countryList }) {
  const [countries, setCountries] = useState(countryList);
  const [filterRegion, setFilterRegion] = useState();
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (searchTerm) setCountries(results);
  }, [searchTerm]);

  useEffect(() => {
    if (filterRegion) {
      setCountries(filterRegions);
    }
  }, [filterRegion]);

  const removeFilter = async (string) => {
    await setCountries(countryList);
  };

  const filterRegions = countries.filter(
    (country) => country.region === filterRegion
  );

  const results = countryList.filter((country) =>
    country.name.toLowerCase().includes(searchTerm)
  );

  const handleFilterRegion = (region) => {
    setFilterRegion(region);
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__inputs}>
        <Input handleSearch={handleSearch} />
        <Select
          handleFilterRegion={handleFilterRegion}
          removeFilter={removeFilter}
        />
      </div>
      {countries.map((country, x) => (
        <Link
          href={{
            pathname: "/country",
            query: { name: country.name },
          }}
        >
          <a>
            <FlagCard key={x} country={country} />
          </a>
        </Link>
      ))}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const json = await res.json();
  // const newCountryList = await Array.from(json);

  return {
    countryList: json,
  };
};
