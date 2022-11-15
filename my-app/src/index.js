//Components
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home";
import Mission from "./Pages/Mission";
//Launch vehicles and launch vehicle subpaths
import LaunchVehicles from "./Pages/Launch-Vehicles/LaunchVehicles";

//News and news subpaths.
import News from "./Pages/News/NewsRoutes";
import Youtube from "./Pages/News/Youtube";

import Weather from "./Pages/News/Weather";
import History from "./Pages/History";

//Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./CSS/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />

        <Route path="/launch-vehicles" element={<LaunchVehicles />} />

        <Route path="/news" element={<News />} />
        <Route path="/news/youtube" element={<Youtube />} />
        <Route path="/news/weather" element={<Weather />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
