import { useLocation } from "react-router";

// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";
import RenderVid from "../../Components/Videos/VehicleDemo";

//CSS
import posContent from "../../CSS/PostionContent/LaunchVehicles.module.css";

function VehicleDemo() {
  // Data from InfoBtn.jsx
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  return (
    <div>
      <NavBar />

      <div className={posContent.vehicleDemo}>
        <RenderVid
          controls={true}
          playing={true}
          loop={true}
          muted={true}
          onlyThumbNail={false}
          vidId={vidUrl}
          title={title}
          text={text}
        />
      </div>
    </div>
  );
}
export default VehicleDemo;
