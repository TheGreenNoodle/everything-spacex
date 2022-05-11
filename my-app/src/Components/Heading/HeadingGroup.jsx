// Custom Components
import NavBar from "./NavBar";
import TitleLine from "./TitleLine";

function HeadingGroup(props) {
  return (
    <div>
      <NavBar />
      <h1>{props.title}</h1>
      <TitleLine />
    </div>
  );
}
export default HeadingGroup;
