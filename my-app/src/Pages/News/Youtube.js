import { useLocation } from "react-router";

// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";

//Get Profile
import GetYoutubeProfile from "../../Components/GetData/GetProfile/GetYoutubeProfile";

function Youtube() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state
  // {title === "News from YouTube" ?  : null}
  return (
    <div>
      <NavBar title={title} />

      <div>
        <GetYoutubeProfile
          channelId="UC1XvxnHFtWruS9egyFasP1Q"
          videosToGet={10}
        />
      </div>
    </div>
  );
}
export default Youtube;
