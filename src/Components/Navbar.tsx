// src/Components/Navbar.tsx
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
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
    );
};

export default Navbar;
