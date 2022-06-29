import { Link } from "react-router-dom";
// CSS
import navBar from "../../CSS/Heading/navBar.module.css";

function NavBar() {
  return (
    <div className={navBar.navBox}>
      <h1>Everything SpaceX</h1>
      <Link className={navBar.text} to="/">
        Home
      </Link>
      <Link className={navBar.text} to="/mission">
        Mission
      </Link>
      <Link className={navBar.text} to="/launch-vehicles">
        Launch Vehicles
      </Link>
      <Link className={navBar.text} to="/news">
        News
      </Link>
      <Link className={navBar.text} to="/history">
        History
      </Link>
    </div>
  );
}

export default NavBar;
