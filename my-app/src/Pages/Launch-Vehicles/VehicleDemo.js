import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import GetVid from "../../Components/GetData//GetVid";

function VehicleDemo() {
  // Data from InfoBtn.jsx
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  console.log(state);
  return (
    <div>
      <HeadingGroup title={title} />
      <GetVid
        controls={false}
        playing={true}
        loop={true}
        muted={true}
        url={vidUrl}
      />
      <p>{text}</p>
    </div>
  );
}
export default VehicleDemo;
