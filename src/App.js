import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Goals from "./pages/Goals";
import Interviews from "./pages/Interviews";
import Analytics from "./pages/Analytics";
function App() {
  const theme =
  localStorage.getItem("theme") || "light";
  return (
    <div className={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/analytics" element={<Analytics />} />
         <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;