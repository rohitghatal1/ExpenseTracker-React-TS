import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../CSS/navbar.css"; // Ensure this CSS file exists and is properly styled
import trackfund from "../assets/logo/trackfunds.png";
import tf from "../assets/logo/tf.png"

interface NavbarProps {
  changeTheme: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  theme: string;
  toggleNavbar: () => void;
  isCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ changeTheme, theme, toggleNavbar, isCollapsed }) => {
  const [activeLink, setActiveLink] = useState<string>("dashboard");

  return (
    <aside className={`sidebar ${isCollapsed? 'collapsed' : ''}`}>
      <nav className="navbar">
        <button className="sidebarAdjust" title={`${isCollapsed? "Expand Navbar" : "Collapse Navbar"}`} onClick={toggleNavbar}><i className={`fa-solid ${isCollapsed? 'fa-arrow-right-long': 'fa-arrow-left-long'}`}></i></button>
        
        <div className="logo">
          <img src={isCollapsed? tf : trackfund} alt="" />
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
                <i className="fa-solid fa-table-columns"></i> <label htmlFor="">Dashboard</label>
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
                <i className="fas fa-wallet"></i> <label htmlFor="">Expenses</label> 
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
                <i className="fas fa-file-alt"></i> <label htmlFor="">Reports</label> 
              </li>
            </Link>
          </ul>
        </div>

        <div className="settingUser">
          <div className="userAccount">
            <button className="loginBtn" title="Login"><i className="fa-solid fa-right-to-bracket"></i><label htmlFor=""> Login</label></button>
            
            <div className="loginModal">
              <h3><i className="fa-regular fa-user"></i> User Login</h3>
              <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="uname" placeholder="Enter your username"/>

                <label htmlFor="password">Password:</label>
                <input type="password" name="upassword" placeholder="Enter your password" />

                <button type="submit" className="confrmLogin">Login</button>
              </form>
            </div>
          </div>
          <div className="modeSwitch">
            <select value={theme} onChange={changeTheme}>
              <option value="" disabled>Select Theme</option>
              <option value="root">Default Theme</option>
              <option value="dark">Dark Mode</option>
              <option value="light">Light Mode</option>
            </select>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
