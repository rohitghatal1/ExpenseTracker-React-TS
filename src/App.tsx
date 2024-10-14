import React from "react";

import "./App.css";
// import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses";
import Reports from "./Components/Reports";

function App() {
  return (
    <div className="app">
      {/* <Dashboard /> */}
      <Navbar/>
      <Expenses/>
      <Reports/>
    </div>
  );
}

export default App;
