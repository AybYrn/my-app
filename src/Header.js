import React from 'react';
import logo from './logo.svg'

export default function Header() {
    return (
      <header>
        <img src ={logo} alt="Logo"></img>
        <nav>
          <ul>Home</ul>
          <ul>Contact</ul>
          <ul>FAQ</ul>
        </nav>
      </header>
    );
  }