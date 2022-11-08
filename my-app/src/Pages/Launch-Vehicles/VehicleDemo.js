import { useLocation } from "react-router";

// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";
import RenderVid from "../../Components/RenderVid";

//CSS
import posContent from "../../CSS/PostionContent/posContent.module.css";

function VehicleDemo() {
  // Data from InfoBtn.jsx
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  return (
    <div>
      <NavBar title={title} />
      <div className={posContent.pos}>
        <RenderVid
          controls={false}
          playing={true}
          loop={true}
          muted={true}
          onlyThumbNail={false}
          vidId={vidUrl}
          desc={text}
        />
      </div>
    </div>
  );
}
export default VehicleDemo;
