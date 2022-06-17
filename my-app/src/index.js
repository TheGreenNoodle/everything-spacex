//Components
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import Goals from "./Pages/Goals";
//Launch vehicles and launch vehicle subpaths
import LaunchVehicles from "./Pages/Launch-Vehicles/LaunchVehicles";
import VehicleDemo from "./Pages/Launch-Vehicles/VehicleDemo";
//News and news subpaths.
import News from "./Pages/News/NewsRoutes";
import Updates from "./Pages/News/Updates";
import Weather from "./Pages/News/Weather";
import History from "./Pages/History";
//Testing
import reportWebVitals from "./reportWebVitals";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//CSS
import "./CSS/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        //Launch vehicles and launch vehicle subpaths
        <Route path="/launch-vehicles" element={<LaunchVehicles />} />
        <Route path="/vehicle-demo" element={<VehicleDemo />} />
        //News and news subpaths.
        <Route path="/news" element={<News />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
