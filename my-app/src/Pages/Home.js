// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import LargeCard from "../Components/Cards/LargeCard";
import Footer from "../Components/Footer/Footer";

//Homepage info
import homeContent from "../Content/Home";

function Home() {
  return (
    <div>
      <HeadingGroup title={"Home"} />
      <LargeCard
        title="Mission"
        text={homeContent.mission.content}
        hasRoute={true}
        route="/mission"
        src={homeContent.mission.imgSrc}
        alt={homeContent.mission.imgAlt}
      />
      <LargeCard
        title="Launch Vehicles"
        text={homeContent.launchVehicles.content}
        hasRoute={true}
        route="/launch-vehicles"
        src={homeContent.launchVehicles.imgSrc}
        alt={homeContent.launchVehicles.imgAlt}
      />
      <LargeCard
        title="News"
        text={homeContent.news.content}
        hasRoute={true}
        route="/news"
        src={homeContent.news.imgSrc}
        alt={homeContent.news.imgAlt}
      />
      <LargeCard
        title="History"
        text={homeContent.history.content}
        hasRoute={true}
        route="/history"
        src={homeContent.history.imgSrc}
        alt={homeContent.history.imgAlt}
      />
      <Footer />
    </div>
  );
}
export default Home;
