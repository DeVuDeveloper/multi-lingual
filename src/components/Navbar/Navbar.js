/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [lang, setLang] = useState('bn');

  const handleChange = (e) => {
    setLang(e.target.value);
    const loc = 'http://localhost:3000';
    window.location.replace(loc + '?lng=' + e.target.value);
  };
  const { t } = useTranslation();

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
              Venue
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
              {t('contactus')}
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
              <option value="en">EN 🇬🇧</option>
              <option value="bs">MN 🇲🇪</option>
              <option value="ru">RU 🇷🇺</option>
              <option value="de">DE 🇩🇪</option>
              <option value="fr">FR 🇫🇷</option>
              <option value="pl">PL 🇵🇱</option>
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
