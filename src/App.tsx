import React from "react";

import "./App.css";
// import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses";
import Reports from "./Components/Reports";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <Navbar/>
      <Expenses/>
      <Reports/>
    </>
  );
}

export default App;
