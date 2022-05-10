//Components
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import Goals from "./Pages/Goals";
import LaunchVehicles from "./Pages/LaunchVehicles";
import News from "./Pages/News";
import History from "./Pages/History";
//Testing
import reportWebVitals from "./reportWebVitals";
//CSS
import "./CSS/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/launch-vehicles" element={<LaunchVehicles />} />
        <Route path="/news" element={<News />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
