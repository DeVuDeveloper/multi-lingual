/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
          <li className="nav-item">
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
