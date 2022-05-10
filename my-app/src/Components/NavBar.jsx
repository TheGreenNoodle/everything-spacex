import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link className="text" to="/">
        Home
      </Link>
      <Link className="text" to="/goals">
        Goals
      </Link>
      <Link className="text" to="/launch-vehicles">
        Launch Vehicles
      </Link>
      <Link className="text" to="/news">
        News
      </Link>
      <Link className="text" to="/history">
        History
      </Link>
    </div>
  );
}

export default NavBar;
