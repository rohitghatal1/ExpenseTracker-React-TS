import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/navbar.css'; // Ensure this CSS file exists and is properly styled

const Navbar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className='navbar'>
        <ul className="navbarList">
          <li>
            <NavLink
              exact
              to="/"
              className="navLink"
              activeClassName="activeLink"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/expenses"
              className="navLink"
              activeClassName="activeLink"
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/reports"
              className="navLink"
              activeClassName="activeLink"
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/settings"
              className="navLink"
              activeClassName="activeLink"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
