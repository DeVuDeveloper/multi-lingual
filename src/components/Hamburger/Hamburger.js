/* eslint-disable arrow-body-style */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './hamburger.css';
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <Menu>
        <ul>
          <li>
            <NavLink
              to="/mts"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>MTS</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/venues"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>Venues</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/info"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>About</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/usluge"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>Services</p>
            </NavLink>
          </li>
        </ul>
      </Menu>
    </div>
  );
};
export default Hamburger;
