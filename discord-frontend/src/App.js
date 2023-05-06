import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./views/Login/Login.jsx";
import Register from "./views/Register/Register.jsx";
import Dashboard from "./views/Dashboard/Dashboard.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
