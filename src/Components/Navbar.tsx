import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css'; // Ensure this CSS file exists and is properly styled
import logo from '../assets/logo/trackfunds.png'

interface NavbarProps {
  toggleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<NavbarProps> = ({toggleTheme, theme}) => {
  return (
    <aside className="sidebar">
      <nav className='navbar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigations">
          <ul className="navbarList">
            <li className='navLink activeLink'>
              <Link to={"/"}><i className="fa-solid fa-table-columns"></i> Dashboard</Link>
              </li>
            <li className='navLink'>
              <Link to={"/expenses"}><i className="fas fa-wallet"></i> Expenses</Link>
            </li>
            <li className='navLink'>
              <Link to={"/reports"}><i className="fas fa-file-alt"></i> Reports</Link> 
            </li>
          </ul>
        </div>
        <div className="settingUser">
          <div className="userAccount">

          </div>
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
