// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import SmallCard from "../../Components/Cards/SmallCard";

function News() {
  return (
    <div>
      <HeadingGroup title={"News"} />
      <SmallCard
        title="News from Twitter"
        text="text2"
        route="/updates"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="Weather at launch sites"
        text="text2"
        route="/weather"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="News from YouTube"
        text="text2"
        route="/updates"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
    </div>
  );
}
export default News;
