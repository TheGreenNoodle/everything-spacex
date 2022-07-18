//Components
import { NavLink } from "react-router-dom";
// CSS
import "../../CSS/Heading/navBar.css";

function NavBar() {
  return (
    <div className="navBox">
      <h1 className="title">Everything SpaceX</h1>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "text")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "text")}
        to="/mission"
      >
        Mission
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "text")}
        to="/launch-vehicles"
      >
        Launch Vehicles
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "text")}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "text")}
        to="/history"
      >
        History
      </NavLink>
    </div>
  );
}

export default NavBar;
