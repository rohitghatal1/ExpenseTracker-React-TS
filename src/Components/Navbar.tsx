import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../CSS/navbar.css'; // Ensure this CSS file exists and is properly styled
import logo from '../assets/logo/trackfunds.png'

const Navbar: React.FC = () => {
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
          <div className="settings">
            <span><i className="fa-solid fa-gear"></i> Settings</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
