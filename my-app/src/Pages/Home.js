// Custom Components
import NavBar from "../Components/Heading/NavBar.jsx";
import LatestNews from "../Components/Cards/Home/LatestNews";
import Weather from "../Components/Cards/Home/Weather";
import PersonalLinks from "../Components/PersonalLinks/PersonalLinks.jsx";

//CSS
import posContent from "../CSS/PostionContent/Home.module.css";

function Home() {
  return (
    <div>
      <NavBar title={"Home"} />

      <div className={posContent.home}>
        <LatestNews
          channelId="UC1XvxnHFtWruS9egyFasP1Q"
          title="Latest News"
          videosToGet={1}
          route="/news/youtube"
        />
        <Weather title="Current Weather" route="/news/weather" />
        <PersonalLinks />
      </div>
    </div>
  );
}
export default Home;
