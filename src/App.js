import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./frontend/components/header/Navbar";
import Home from "./frontend/modules/home/Home";
import Tour from "./frontend/modules/tour/Tour";
import Login from "./frontend/modules/login/Login";
import Register from "./frontend/modules/register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
