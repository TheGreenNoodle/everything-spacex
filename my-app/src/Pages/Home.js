// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import LatestNews from "../Components/Cards/Home/LatestNews";
import Weather from "../Components/Cards/Home/Weather";
import PersonalLinks from "../Components/PersonalLinks/PersonalLinks.jsx";

//CSS
import posContent from "../CSS/posContent.module.css";

function Home() {
  // key={index} https://www.youtube.com/watch?v=ysz5S6PUM-U
  // title={data.title}
  // text={data.content}
  // hasRoute={true}
  // route={data.route}
  // src={data.imgSrc}
  // alt={data.imgAWlt}
  return (
    <div>
      <HeadingGroup title={"Home"} />

      <div className={posContent.home}>
        <LatestNews
          channelId="UC1XvxnHFtWruS9egyFasP1Q"
          title="Latest News"
          videosToGet={1}
        />
        <Weather title="Current Weather" route="/news/weather" />
        <PersonalLinks />
      </div>
    </div>
  );
}
export default Home;
