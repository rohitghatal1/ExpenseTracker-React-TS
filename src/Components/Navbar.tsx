import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/navbar.css";
import "../responsiveCSS/navbar.css";
import trackfund from "../assets/logo/trackfunds.png";
import tf from "../assets/logo/tf.png";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

interface NavbarProps {
  changeTheme: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  theme: string;
  toggleNavbar: () => void;
  isCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  changeTheme,
  theme,
  toggleNavbar,
  isCollapsed,
}) => {
  const [activeLink, setActiveLink] = useState<string>("dashboard");

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      setActiveLink("dashboard");
    } else if (currentPath === "/expenses") {
      setActiveLink("expenses");
    } else if (currentPath === "/reports") {
      setActiveLink("reports");
    }
  }, [location.pathname]);

  const handleGoogleLogin = () => {};

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className="navbar">
        <button
          className="sidebarAdjust"
          title={`${isCollapsed ? "Expand Navbar" : "Collapse Navbar"}`}
          onClick={toggleNavbar}
        >
          <i
            className={`fa-solid ${
              isCollapsed ? "fa-arrow-right-long" : "fa-arrow-left-long"
            }`}
          ></i>
        </button>

        <div className="logo">
          <img src={isCollapsed ? tf : trackfund} alt="" />
        </div>

        <div className="navigations">
          <ul className="navbarList">
            <Link
              to="/"
              className={`navLink ${
                activeLink === "dashboard" ? "activeLink" : ""
              }`}
              title="Dashboard"
            >
              <li className="linkItem">
                <i className="fa-solid fa-table-columns"></i>{" "}
                <label htmlFor="">Dashboard</label>
              </li>
            </Link>

            <Link
              to="/expenses"
              className={`navLink ${
                activeLink === "expenses" ? "activeLink" : ""
              }`}
              title="Expenses"
            >
              <li className="linkItem">
                <i className="fa-solid fa-money-check-dollar"></i>{" "}
                <label htmlFor="">Expenses</label>
              </li>
            </Link>

            <Link
              to="/reports"
              className={`navLink ${
                activeLink === "reports" ? "activeLink" : ""
              }`}
              title="Reports"
            >
              <li className="linkItem">
                <i className="fas fa-file-alt"></i>{" "}
                <label htmlFor="">Reports</label>
              </li>
            </Link>
          </ul>
        </div>

        <div className="settingUser">
          <div className="userAccount">
            <button className="loginBtn" title="Login" onClick={openLoginModal}>
              <i className="fa-solid fa-right-to-bracket"></i>
              <label htmlFor=""> Login</label>
            </button>

            {isLoginOpen && (
              <div className="loginModal">
                <h3>
                  <i className="fa-regular fa-user"></i> User Login
                </h3>
                <span className="closeLoginBtn" onClick={closeLoginModal}>
                  &times;
                </span>

                <Form>
                  <label htmlFor="username">
                    <i className="fas fa-user"></i> Username:
                  </label>
                  <Input
                    type="text"
                    name="uname"
                    placeholder="Enter your username"
                  />

                  <label htmlFor="password">
                    {" "}
                    <i className="fas fa-lock"></i> Password:
                  </label>

                  <Input
                    type="password"
                    name="upassword"
                    placeholder="Enter your password"
                  />

                  <Button htmlType="submit" className="confrmLogin">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                  </Button>
                </Form>
                <div className="googleLoginOption">
                  <span className="googleLogin" onClick={handleGoogleLogin}>
                    <i className="fa-brands fa-google"></i> Login with Google
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="modeSwitch">
            <Select
              //  value={theme}
              onChange={changeTheme}
            >
              <Option value="" disabled>
                Select Theme
              </Option>
              <Option value="root">Default Theme</Option>
              <Option value="dark">Dark Mode</Option>
              <Option value="light">Light Mode</Option>
            </Select>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
