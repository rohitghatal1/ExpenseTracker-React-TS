import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <aside className="navbarContainer">
      <nav className="navbar">
        <ul className="navbarItems">
            <li>
                <NavLink exact to="/" activeClassName="activeLink" className="navLink">Home</NavLink>
            </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
