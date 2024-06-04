import React, { useState } from "react";
import './theme.css'
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light'? 'dark' : 'light');
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change theme</button>
      </div>
    </div>
  );
}