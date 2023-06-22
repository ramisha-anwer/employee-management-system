import React from 'react';
import "./Header.css"
import logo from "./Logo.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />

      </div>
      <div className="title">
        <p>Employee Management</p>
      </div>
    </header>
  );
};

export default Header;
