//Components
import { useEffect } from "react";

//Custom Components
import NavBar from "./NavBar";
import headingGroup from "../../CSS/Heading/headingGroup.module.css";

function HeadingGroup(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className={headingGroup.heading}>{props.title}</h1>
    </div>
  );
}
export default HeadingGroup;
