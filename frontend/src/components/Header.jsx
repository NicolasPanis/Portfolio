import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="nav">
        <Link className="home" to="/">
          Home
        </Link>
        <div className="lineHeader" />
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
