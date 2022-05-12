// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import SmallCard from "../../Components/Cards/SmallCard";

function LaunchVehicles() {
  return (
    <div>
      <HeadingGroup title={"Launch Vehicles"} />
      <SmallCard
        title="Title"
        text="text"
        route="/vehicle-demo"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="Title2"
        text="text2"
        route="/vehicle-demo"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="Title3"
        text="text3"
        route="/vehicle-demo"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
      <SmallCard
        title="Title4"
        text="text4"
        route="/vehicle-demo"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
      />
    </div>
  );
}
export default LaunchVehicles;
