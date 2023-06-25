import React from "react";
import "../Styles.css/header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#goals",
    display: "Schedule",
  },
  {
    path: "#courses",
    display: "Courses",
  },
  {
    path: "#pricing",
    display: "Pricing",
  },
];

function Header() {
  return (
    <header>
      <div className="nav__wrapper">
        <h1>FITandFAT</h1>
        <div className="navigation">
          <ul className="menu">
            {nav__links.map((item) => (
              <li className="nav__item">
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__right">
          <button className="register__btn"><a href="#login" className="btnss">Register</a></button>
          <span className="mobile__menu">
            <i class="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
