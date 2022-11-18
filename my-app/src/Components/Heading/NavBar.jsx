//Components
import { NavLink } from "react-router-dom";
import { useRef } from "react";

//Data
import navLinks from "../../Content/NavBar.js";

//Animation
import Animation from "./Animation.js";

// CSS
import "../../CSS/Heading/navBar.css";

function NavBar() {
  //Refs
  const dropDown = useRef(null);
  const dropDownMenu = useRef(null);

  //Toggle Menu
  let toggle = true;

  function runAnimation() {
    Animation(dropDown);

    toggle
      ? dropDownMenu.current.classList.add("displayBlock")
      : dropDownMenu.current.classList.remove("displayBlock");

    toggle ? (toggle = false) : (toggle = true);
  }

  return (
    <div className="posSticky">
      <div className="navBox">
        <div className="title">Everything SpaceX</div>

        <div className="vLine" />

        <div className="noDropDown">
          {navLinks.map((data, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => (isActive ? "selected" : "text")}
              to={data.route}
            >
              {data.linkName}
            </NavLink>
          ))}
        </div>

        <button ref={dropDown} onClick={runAnimation} className="dropDownBtn">
          <div className="dropDownIcon" />
          <div className="dropDownIcon" />
          <div className="dropDownIcon" />
        </button>
      </div>
      <div ref={dropDownMenu} className="dropDownMenu">
        {navLinks.map((data, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? "dropDownTxtSelec" : "dropDownTxt"
            }
            to={data.route}
          >
            {data.linkName}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
