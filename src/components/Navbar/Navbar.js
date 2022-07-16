/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { t, i18n } = useTranslation();

  const currentLocale = Cookies.get('i18next') || 'en';

  const languages = [
    { name: 'EN', code: 'en' },
    { name: 'ME', code: 'bs' },
    { name: 'DE', code: 'de' },
    { name: 'RU', code: 'ru' },
    { name: 'FR', code: 'fr' },
    { name: 'PL', code: 'pl' },
  ];

  const [language, setLanguage] = useState(currentLocale);

  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const currentLangObj = languages.find((lang) => lang.code === currentLocale);

  useEffect(() => {
    document.title = t('Multi_langual');
  }, [currentLangObj, t]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links-first">
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
                {t('about')}
              </NavLink>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
        <div className="nav-links-second">
          <ul className={click ? 'nav1-menu active' : 'nav1-menu'}>
            <li className="nav1-item">
              <i className="fa fa-search icon"></i>
            </li>
            <li className="nav1-item"></li>

            <li className="nav1-item">
              <select onChange={handleChangeLocale} value={language}>
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
