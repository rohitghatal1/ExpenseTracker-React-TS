import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses";
import Reports from "./Components/Reports";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

const App: React.FC = () => {

  const storedTheme = localStorage.getItem("theme") || "root"; 
  const [theme, setTheme] = useState(storedTheme);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); 
  }, [theme]);

  const changeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  }

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleNavbar = ():void => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
    <Navbar changeTheme={changeTheme} theme={theme} toggleNavbar={toggleNavbar} isCollapsed = {isCollapsed}/>
    <Routes>
      <Route path="/" element ={<Dashboard/>}/> 
      <Route path="/expenses" element={<Expenses isCollapsed={isCollapsed}/>}/>
      <Route path="/reports" element={<Reports/>} />
    </Routes>
    </>

  );
};

export default App;
