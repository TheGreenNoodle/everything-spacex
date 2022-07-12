import { useLocation } from "react-router";

// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import Footer from "../../Components/Footer/Footer";

//Get Profile
import GetTwitterProfile from "../../Components/GetData/GetProfile/GetTwitterProfile";

//Images
import spacexPic from "../../Images/Twitter/spacexPic.jpg";
import elonPic from "../../Images/Twitter/elon.jpeg";
import bocaGal from "../../Images/Twitter/boca-chica-gal.jpg";

//CSS
import getProfile from "../../CSS/Proflies/getTwitterProfile.module.css";

function Twitter() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
      <div className={getProfile.parentDiv}>
        <GetTwitterProfile
          username="SpaceX"
          url="https://twitter.com/spacex"
          profilePic={spacexPic}
        />
      </div>

      <div className={getProfile.parentDiv}>
        <GetTwitterProfile
          username="BocaChicaGal"
          url="https://twitter.com/BocaChicaGal"
          profilePic={bocaGal}
        />
      </div>

      <div className={getProfile.parentDiv}>
        <GetTwitterProfile
          username="elonmusk"
          url="https://twitter.com/elonmusk/status/1529869999803965446"
          profilePic={elonPic}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Twitter;
