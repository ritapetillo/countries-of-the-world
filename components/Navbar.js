import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { IconButton } from "@material-ui/core";

function Navbar({ initialMode, changeMode }) {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>Where in the world?</a>
      </Link>
      {initialMode ? (
        <span className={styles.mode}>
          <IconButton onClick={() => changeMode()}>
            <WbSunnyIcon className={styles.button} />
          </IconButton>
          Light Mode
        </span>
      ) : (
        <span className={styles.mode}>
          <IconButton onClick={() => changeMode()}>
            <Brightness2Icon className={styles.button} />
          </IconButton>
          Dark Mode
        </span>
      )}
    </div>
  );
}

export default Navbar;
