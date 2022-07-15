/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const languages = [
  { value: '', text: 'Language' },
  { value: 'en', text: 'English' },
  { value: 'bs', text: 'Crnogorski' },
  { value: 'ru', text: 'Russian' },
  { value: 'de', text: 'German' },
  { value: 'fr', text: 'French' },
  { value: 'pl', text: 'Polish' },
];

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [lang, setLang] = useState('bn');

  const handleChange = (e) => {
    setLang(e.target.value);
    const loc = 'https://projekat-filip.netlify.app/';
    window.location.replace(loc + '?lng=' + e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              exact
              to="/mts"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              MTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/venues"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Venues
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contactus"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact us
            </NavLink>
          </li>
          <li className="nav-item"></li>
        </ul>

        <ul className={click ? 'nav1-menu active' : 'nav1-menu'}>
          <li className="nav1-item">
            <i className="fa fa-search icon"></i>
          </li>
          <li className="nav1-item"></li>

          <li className="nav1-item">
            <select value={lang} onChange={handleChange}>
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </li>
          <li className="nav1-item"></li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
