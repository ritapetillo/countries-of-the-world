import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import Head from "next/head";

function Layout({ children }) {
  const [mode, setMode] = useState();
  const [theme, setTheme] = useState("light");
  const changeMode = async () => {
    await setMode(!mode);
    selectCss();
  };
  const selectCss = () => {
    if (mode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <link rel="stylesheet" href={`/css/${theme}.css`} />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/84a612360c.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Navbar initialMode={mode} changeMode={changeMode} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
