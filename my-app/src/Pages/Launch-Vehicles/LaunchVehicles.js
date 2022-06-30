// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import SmallCard from "../../Components/Cards/SmallCard";
import Footer from "../../Components/Footer/Footer";

//Content
import vehiclesContent from "../../Content/LaunchVehicles";

function LaunchVehicles() {
  return (
    <div>
      <HeadingGroup title={"Launch Vehicles"} />

      <div>
        {vehiclesContent.slice(0, 2).map((data, index) => (
          <SmallCard
            key={index}
            title={data.title}
            subTitle={data.subTitle}
            text={data.text}
            hasImg={true}
            src={data.imgSrc}
            alt={data.imgAlt}
            route="/launch-vehicles/vehicle-demo"
            btn={true}
            vidUrl={data.vidId}
          />
        ))}
      </div>
      {vehiclesContent.slice(2, 4).map((data, index) => (
        <SmallCard
          key={index + 2}
          title={data.title}
          subTitle={data.subTitle}
          text={data.text}
          hasImg={true}
          src={data.imgSrc}
          alt={data.imgAlt}
          route="/launch-vehicles/vehicle-demo"
          btn={true}
          vidUrl={data.vidId}
        />
      ))}

      <Footer />
    </div>
  );
}
export default LaunchVehicles;
