import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav">
        <Link
          to="#contact"
          onClick={() => {
            const contact = document.getElementById("contact");
            // eslint-disable-next-line no-unused-expressions
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          Projects
        </Link>
        <Link
          to="#contact"
          onClick={() => {
            const contact = document.getElementById("contact");
            // eslint-disable-next-line no-unused-expressions
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          About
        </Link>
        <Link
          to="#contact"
          onClick={() => {
            const contact = document.getElementById("contact");
            // eslint-disable-next-line no-unused-expressions
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "end" });
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
