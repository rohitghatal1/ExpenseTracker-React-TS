import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure you have this CSS file for styling

// Define an interface for the props if needed
interface NavLinkProps {
  isActive: boolean;
}

const Navbar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }: NavLinkProps) => (isActive ? "navLink activeLink" : "navLink")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/expenses" 
              className={({ isActive }: NavLinkProps) => (isActive ? "navLink activeLink" : "navLink")}
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reports" 
              className={({ isActive }: NavLinkProps) => (isActive ? "navLink activeLink" : "navLink")}
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              className={({ isActive }: NavLinkProps) => (isActive ? "navLink activeLink" : "navLink")}
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
