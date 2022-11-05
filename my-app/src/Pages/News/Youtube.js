import { useLocation } from "react-router";

// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";

//Get Profile
import GetYoutubeProfile from "../../Components/GetData/GetProfile/GetYoutubeProfile";

//CSS
import posContent from "../../CSS/PostionContent/posContent.module.css";

function Youtube() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state
  // {title === "News from YouTube" ?  : null}
  return (
    <div>
      <HeadingGroup title={title} />

      <div className={posContent.pos}>
        <div>
          <GetYoutubeProfile
            channelId="UC1XvxnHFtWruS9egyFasP1Q"
            videosToGet={10}
          />
        </div>
      </div>
    </div>
  );
}
export default Youtube;
