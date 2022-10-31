// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import LargeCard from "../Components/Cards/LargeCard";
import PersonalLinks from "../Components/PersonalLinks/PersonalLinks.jsx";

//Data
import WeatherData from "../Components/GetData/GetWeather/OutputDataSm";

//CSS
import posContent from "../CSS/posContent.module.css";

function Home() {
  // key={index}
  // title={data.title}
  // text={data.content}
  // hasRoute={true}
  // route={data.route}
  // src={data.imgSrc}
  // alt={data.imgAlt}
  return (
    <div>
      <HeadingGroup title={"Home"} />
      <div className={posContent.home}>
        <LargeCard title="Latest News" hasLine={true} />
        <LargeCard title="Weather" hasLine={true} weather={<WeatherData />} />
        <PersonalLinks />
      </div>
    </div>
  );
}
export default Home;
