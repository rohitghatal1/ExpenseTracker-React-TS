import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../CSS/navbar.css"; // Ensure this CSS file exists and is properly styled
import logo from "../assets/logo/trackfunds.png";

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [activeLink, setActiveLink] = useState<string>("dashboard");

  return (
    <aside className="sidebar">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigations">
          <ul className="navbarList">
            <Link
              to="/"
              className={`navLink ${
                activeLink === "dashboard" ? "activeLink" : ""
              }`}
              onClick={() => setActiveLink("dashboard")}
            >
              <li className="linkItem">
                <i className="fa-solid fa-table-columns"></i> Dashboard
              </li>
            </Link>
            <Link
              to="/expenses"
              className={`navLink ${
                activeLink === "expenses" ? "activeLink" : ""
              }`}
              onClick={() => setActiveLink("expenses")}
            >
              <li className="linkItem">
                <i className="fas fa-wallet"></i> Expenses
              </li>
            </Link>
            <Link
              to="/reports"
              className={`navLink ${
                activeLink === "reports" ? "activeLink" : ""
              }`}
              onClick={() => setActiveLink("reports")}
            >
              <li className="linkItem">
                <i className="fas fa-file-alt"></i> Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="settingUser">
          <div className="userAccount"></div>
          <div className="modeSwitch">
            <button onClick={toggleTheme}>
              {theme === "root" && "Switch to Dark Mode"}
              {theme === "dark" && "Switch to Light Mode"}
              {theme === "light" && "Switch to Root Theme"}
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
