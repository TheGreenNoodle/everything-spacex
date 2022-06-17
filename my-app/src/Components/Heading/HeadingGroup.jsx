// Custom Components
import NavBar from "./NavBar";
import headingGroup from "../../CSS/Heading/headingGroup.module.css";

function HeadingGroup(props) {
  return (
    <div>
      <NavBar />
      <h1 className={headingGroup.heading}>{props.title}</h1>
      <div>
        <hr className={headingGroup.line} />
      </div>
    </div>
  );
}
export default HeadingGroup;
