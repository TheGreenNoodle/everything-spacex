import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import RenderVid from "../../Components/RenderVid";

function VehicleDemo() {
  // Data from InfoBtn.jsx
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
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
  );
}
export default VehicleDemo;
