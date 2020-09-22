import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "../styles/Input.module.css";

function Input({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState();

  const handleType = (e) => {
    setSearchTerm(e.target.value);

    handleSearch(searchTerm);
  };
  return (
    <div className={styles.input__container}>
      <SearchIcon />
      <input
        type="text"
        name="search-country"
        id="search-country"
        placeholder="Search for a Country..."
        onChange={(e) => handleType(e)}
        value={searchTerm}
      />
    </div>
  );
}

export default Input;
