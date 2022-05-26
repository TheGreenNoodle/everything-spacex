import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import GetVid from "../../Components/GetData/GetVid";
import GetProfile from "../../Components/GetData/GetProfile";

//Images
import spacexPic from "../../Images/spacex.jpg";
import elonPic from "../../Images/elon.jpeg";
import bocaGal from "../../Images/boca-chica-gal.jpg";

function Updates() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
      {title === "News from Twitter" ? (
        <div>
          <GetProfile
            username="SpaceX"
            url="https://twitter.com/spacex"
            profilePic={spacexPic}
          />
          <GetProfile
            username="BocaChicaGal"
            url="https://twitter.com/BocaChicaGal"
            profilePic={bocaGal}
          />
          <GetProfile
            username="elonmusk"
            url="https://twitter.com/elonmusk/status/1529869999803965446"
            profilePic={elonPic}
          />
        </div>
      ) : (
        <div>
          <GetVid
            controls={true}
            playing={false}
            loop={false}
            muted={false}
            url="https://www.youtube.com/watch?v=-XgByQJYRgU"
          />
        </div>
      )}
    </div>
  );
}
export default Updates;
