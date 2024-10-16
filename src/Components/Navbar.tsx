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
      </nav>
    </aside>
  );
};

export default Navbar;
