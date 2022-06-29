import { useLocation } from "react-router";

// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import Footer from "../../Components/Footer/Footer";

//Get Profile
import GetYoutubeProfile from "../../Components/GetData/GetProfile/GetYoutubeProfile";

function Youtube() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state
  // {title === "News from YouTube" ?  : null}
  return (
    <div>
      <HeadingGroup title={title} />

      <div>
        <GetYoutubeProfile channelId="UC1XvxnHFtWruS9egyFasP1Q" />
      </div>

      <Footer />
    </div>
  );
}
export default Youtube;
