import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses";
import Reports from "./Components/Reports";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

const App: React.FC = () => {
  // Get the stored theme from localStorage or default to "root"
  const storedTheme = localStorage.getItem("theme") || "root"; 
  const [theme, setTheme] = useState(storedTheme);

  // Update the theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Update theme
    localStorage.setItem("theme", theme); // Persist the theme to localStorage
  }, [theme]);

  // Toggle function to switch between root, dark, and light themes
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "root") return "dark";
      if (prev === "dark") return "light";
      return "root"; // Cycle back to root
    });
  };

  return (
    <>
    <Navbar toggleTheme={toggleTheme} theme={theme} />
    <Routes>
      <Route path="/" element ={<Dashboard/>}/> 
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/reports" element={<Reports/>} />
    </Routes>
    </>

  );
};

export default App;
