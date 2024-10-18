import React from 'react';
// import { NavLink } from 'react-router-dom';
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
            <li className='navLink activeLink'><i className="fa-solid fa-table-columns"></i> Dashboard</li>
            <li className='navLink'><i className="fas fa-wallet"></i> Expenses</li>
            <li className='navLink'><i className="fas fa-file-alt"></i> Reports</li>
            <li className='navLink'>Extra</li>
          </ul>
        </div>
        <div className="settingUser">
          <div className="userAccount">

          </div>
          <div className="modeSwitch">
            <button onClick={toggleTheme}>{theme === "light"? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
