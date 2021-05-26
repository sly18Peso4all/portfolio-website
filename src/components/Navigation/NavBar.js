import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navigation nav-active" : "navigation"}>
      <div className="navigation__logo">
        <Link className="nav-link" to="/">
          <span>iam</span>
          <span className="primary-heading">joseph</span>
        </Link>
      </div>

      <div className="navigation__menu">
        <ul className="navigation__item">
          <li className="navigation__list">
            <a className="navigation__link" href="#hero">
              Home
            </a>
          </li>
          <li className="navigation__list">
            <a className="navigation__link" href="#featured">
              Featured
            </a>
          </li>
          <li className="navigation__list">
            <a className="navigation__link" href="#skills">
              skills
            </a>
          </li>

          <li className="navigation__list">
            <a className="navigation__link" href="#projects">
              projects
            </a>
          </li>
          <li className="navigation__list">
            <a className="navigation__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
