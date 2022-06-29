import { useLocation } from "react-router";

// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import Footer from "../../Components/Footer/Footer";

//Get Profile
import GetTwitterProfile from "../../Components/GetData/GetProfile/GetTwitterProfile";

//Images
import spacexPic from "../../Images/spacexPic.jpg";
import elonPic from "../../Images/elon.jpeg";
import bocaGal from "../../Images/boca-chica-gal.jpg";

function Twitter() {
  const { state } = useLocation();
  const { title, text } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
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
      <Footer />
    </div>
  );
}

export default Twitter;
