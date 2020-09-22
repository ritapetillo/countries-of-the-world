import React, { useState } from "react";
import styles from "../styles/Select.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Select({ handleFilterRegion, removeFilter }) {
  const [selectOn, setSelectOn] = useState(false);
  const [filter, setFilter] = useState("");

  const clear = async () => {
    await removeFilter("removed");
    setSelectOn(!selectOn);
  };

  return (
    <div className={styles.select}>
      <div
        className={styles.select__select}
        onClick={() => {
          clear();
        }}
      >
        {filter ? <span>{filter}</span> : <span>Filter by Region</span>}
        <span>
          <ExpandMoreIcon />
        </span>
      </div>
      <div
        className={[
          styles.select__options,
          selectOn ? styles.select__visible : styles.select__hidden,
        ].join(" ")}
        display="false"
      >
        {filter ? (
          <span
            onClick={() => {
              clear();
              setFilter("");
            }}
          >
            Remove Filter
          </span>
        ) : (
          ""
        )}

        <span
          onClick={() => {
            handleFilterRegion("Africa");
            setSelectOn(!selectOn);
            setFilter("Africa");
          }}
        >
          Africa
        </span>
        <span
          onClick={() => {
            handleFilterRegion("Americas");
            setFilter("Americas");
            setSelectOn(!selectOn);
          }}
        >
          America
        </span>
        <span
          onClick={() => {
            handleFilterRegion("Asia");
            setFilter("Asia");

            setSelectOn(!selectOn);
          }}
        >
          Asia
        </span>
        <span
          onClick={() => {
            handleFilterRegion("Europe");
            setFilter("Europe");

            setSelectOn(!selectOn);
          }}
        >
          Europe
        </span>
        <span
          onClick={() => {
            handleFilterRegion("Oceania");
            setFilter("Oceania");
            setSelectOn(!selectOn);
          }}
        >
          Oceania
        </span>
        <span
          onClick={() => {
            handleFilterRegion("Polar");
            setFilter("Polar");
            setSelectOn(!selectOn);
          }}
        >
          Polar
        </span>
      </div>
    </div>
  );
}

export default Select;
