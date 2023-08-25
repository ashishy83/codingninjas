import "./App.css";
import Home from "./components/Home";

import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="nav-home">
        <Navbar />
      </div>
      <Home />
    </div>
  );
};

export default App;
