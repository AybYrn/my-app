import React from "react";
import logo from "./logo.svg";

export default function Header(props) {
  return (
    <header className={props.lightMode ? "light" : ""}>
      <img src={logo} alt="Logo"></img>
      <nav>
        <ul>Home</ul>
        <ul>Contact</ul>
        <ul>FAQ</ul>
      </nav>
      <div className="toggle--container">
        <span>Light</span>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round" onClick={props.toggleDarkMode}></span>
        </label>
        <span>Dark</span>
      </div>
    </header>
  );
}
