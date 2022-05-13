// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import SmallCard from "../../Components/Cards/SmallCard";

function LaunchVehicles() {
  return (
    <div>
      <HeadingGroup title={"Launch Vehicles"} />
      <SmallCard
        title="Dragon"
        subTitle="subTitle2"
        text="text"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        vidUrl="https://youtu.be/gA6ppby3JC8"
      />
      <SmallCard
        title="Falcon 9"
        subTitle="subTitle2"
        text="text2.4"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        vidUrl="https://youtu.be/gA6ppby3JC8"
      />
      <SmallCard
        title="Falcon Heavy"
        subTitle="subTitle2"
        text="text3"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        vidUrl="https://youtu.be/gA6ppby3JC8"
      />
      <SmallCard
        title="Starship"
        subTitle="subTitle2"
        text="text4"
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        vidUrl="https://youtu.be/gA6ppby3JC8"
      />
    </div>
  );
}
export default LaunchVehicles;
