import React, { useEffect, useState } from "react";

import "./App.css";
// import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses";
import Reports from "./Components/Reports";

const App:React.FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
  },[theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="app">
      {/* <Dashboard /> */}
      <Navbar toggleTheme = {toggleTheme} theme = {theme}/>
      <Expenses/>
      <Reports/>
    </div>
  );
}

export default App;
