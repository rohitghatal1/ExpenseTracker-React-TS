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

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  }

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  }

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
              onClick={() => setActiveLink("dashboard")} title="Dashboard"
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
              onClick={() => setActiveLink("expenses")} title="Expenses"
            >
              <li className="linkItem">
              <i className="fa-solid fa-money-check-dollar"></i> <label htmlFor="">Expenses</label> 
              </li>
            </Link>
            <Link
              to="/reports"
              className={`navLink ${
                activeLink === "reports" ? "activeLink" : ""
              }`}
              onClick={() => setActiveLink("reports")} title="Reports"
            >
              <li className="linkItem">
                <i className="fas fa-file-alt"></i> <label htmlFor="">Reports</label> 
              </li>
            </Link>
          </ul>
        </div>

        <div className="settingUser">
          <div className="userAccount">
            <button className="loginBtn" title="Login" onClick={openLoginModal}><i className="fa-solid fa-right-to-bracket"></i><label htmlFor=""> Login</label></button>
            
            {isLoginOpen && <div className="loginModal">
              <h3><i className="fa-regular fa-user"></i> User Login</h3>
              <span className="closeLoginBtn" onClick={closeLoginModal}>&times;</span>
              <form>
                <label htmlFor="username"><i className="fas fa-user"></i> Username:</label>
                <input type="text" name="uname" placeholder="Enter your username"/>

                <label htmlFor="password"> <i className="fas fa-lock"></i> Password:</label>
                <input type="password" name="upassword" placeholder="Enter your password" />

                <button type="submit" className="confrmLogin"><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</button>
              </form>
              <div className="googleLoginOption">
                <span className="googleLogin"><i className="fa-brands fa-google"></i> Login with Google</span>
              </div>
            </div>}
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
