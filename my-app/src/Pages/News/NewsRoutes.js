// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import SmallCard from "../../Components/Cards/SmallCard";
import Footer from "../../Components/Footer/Footer";

function News() {
  return (
    <div>
      <HeadingGroup title={"News"} />
      <SmallCard
        title="Twitter"
        subTitle="Latest from Twitter"
        route="/news/twitter"
        btn={true}
        hasImg={true}
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="Weather"
        subTitle="At launch sites"
        route="/news/weather"
        btn={true}
        hasImg={true}
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="YouTube"
        subTitle="Latest from YouTube"
        route="/news/youtube"
        btn={true}
        hasImg={true}
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <Footer />
    </div>
  );
}
export default News;
