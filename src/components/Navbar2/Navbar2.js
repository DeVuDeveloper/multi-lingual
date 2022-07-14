/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar2.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar2">
      <div className="nav2-container">
        <ul className={click ? 'nav2-menu active' : 'nav2-menu'}>
          <li className="nav2-item">
            <strong className="nav2-logo">LOGO</strong>
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/info"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              O nama
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/usluge"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              Usluge
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/crnagora"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              O Crnoj Gori
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/location"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              LocationFounder
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/aktuelnosti"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              Aktuelnosti
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
          <li className="nav2-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav2-links"
              onClick={handleClick}
            >
              CONTACT
            </NavLink>
          </li>
          <li className="nav2-item">
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
