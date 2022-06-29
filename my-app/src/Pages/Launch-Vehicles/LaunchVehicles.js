// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import SmallCard from "../../Components/Cards/SmallCard";
import Footer from "../../Components/Footer/Footer";

function LaunchVehicles() {
  return (
    <div>
      <HeadingGroup title={"Launch Vehicles"} />
      <div>
        <SmallCard
          title="Dragon"
          subTitle="subTitle2"
          text="text"
          hasImg={true}
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
          alt="img-starship-spacex"
          route="/vehicle-demo"
          btn={true}
          vidUrl="sZlzYzyREAI"
        />
        <SmallCard
          title="Falcon 9"
          subTitle="subTitle2"
          text="text2.4"
          hasImg={true}
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
          alt="img-starship-spacex"
          route="/vehicle-demo"
          btn={true}
          vidUrl="Z4TXCZG_NEY"
        />
      </div>
      <SmallCard
        title="Falcon Heavy"
        subTitle="subTitle2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Et tortor at risus viverra. Adipiscing vitae proin sagittis nisl rhoncus mattis. Sodales ut etiam sit amet. Turpis egestas sed tempus urna et. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Dui nunc mattis enim ut tellus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tempor commodo ullamcorper a lacus vestibulum sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nisi est sit amet facilisis magna etiam tempor orci."
        hasImg={true}
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        btn={true}
        vidUrl="A0FZIwabctw?t=33"
      />
      <SmallCard
        title="Starship"
        subTitle="subTitle2"
        text="text4"
        hasImg={true}
        src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=730&crop=1"
        alt="img-starship-spacex"
        route="/vehicle-demo"
        btn={true}
        vidUrl="gA6ppby3JC8"
      />
      <Footer />
    </div>
  );
}
export default LaunchVehicles;
