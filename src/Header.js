import React from "react";
import logo from "./logo.svg";

export default function Header() {
  function handleClick(){
    var element = document.body;
    element.classList.toggle("light-mode");
  }
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      <nav>
        <ul>Home</ul>
        <ul>Contact</ul>
        <ul>FAQ</ul>
      </nav>
      <div className="toggle--container">
        <span>Light</span>
        <label className="switch">
          <input type="checkbox" onClick={handleClick} />
          <span className="slider round" ></span>
        </label>
        <span>Dark</span>
      </div>
    </header>
  );
}
