import React from "react";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"></img>
      <nav>
        <ul>Home</ul>
        <ul>Contact</ul>
        <ul>FAQ</ul>
      </nav>
      <div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </header>
  );
}
