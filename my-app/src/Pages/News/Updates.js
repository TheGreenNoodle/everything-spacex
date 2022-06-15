import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
//Get Profiles
import GetTwitterProfile from "../../Components/GetData/GetProfile/GetTwitterProfile";
import GetYoutubeProfile from "../../Components/GetData/GetProfile/GetYoutubeProfile";

//Images
import spacexPic from "../../Images/spacex.jpg";
import elonPic from "../../Images/elon.jpeg";
import bocaGal from "../../Images/boca-chica-gal.jpg";

function Updates() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state
  // {title === "News from YouTube" ?  : null}
  return (
    <div>
      <HeadingGroup title={title} />
      {title === "News from Twitter" ? (
        <div>
          <GetTwitterProfile
            username="SpaceX"
            url="https://twitter.com/spacex"
            profilePic={spacexPic}
          />
          <GetTwitterProfile
            username="BocaChicaGal"
            url="https://twitter.com/BocaChicaGal"
            profilePic={bocaGal}
          />
          <GetTwitterProfile
            username="elonmusk"
            url="https://twitter.com/elonmusk/status/1529869999803965446"
            profilePic={elonPic}
          />
        </div>
      ) : (
        <div>
          <GetYoutubeProfile channelId="UC1XvxnHFtWruS9egyFasP1Q" />
        </div>
      )}
    </div>
  );
}
export default Updates;
