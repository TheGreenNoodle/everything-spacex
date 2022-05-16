import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import GetVid from "../../Components/GetData/GetVid";
import GetProfile from "../../Components/GetData/GetProfile";
import GetDate from "../../Components/GetData/GetDate";
function Updates() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
      <GetProfile />
      <GetVid
        controls={true}
        playing={false}
        loop={false}
        muted={false}
        url={"https://www.youtube.com/watch?v=-XgByQJYRgU"}
      />
      <GetDate />
    </div>
  );
}
export default Updates;
