// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup";
import SmallCard from "../../Components/Cards/SmallCard";

//Content
import vehiclesContent from "../../Content/LaunchVehicles";

//CSS
import posContent from "../../CSS/PostionContent/posContent.module.css";
import boxClasses from "../../CSS/Cards/SmallCard/boxClasses.module.css";

function LaunchVehicles() {
  return (
    <div>
      <HeadingGroup title={"Launch Vehicles"} />

      <div className={posContent.launchVehicles}>
        {vehiclesContent.map((data, index) => (
          <SmallCard
            class={boxClasses.vehiclesBox}
            key={index}
            title={data.title}
            subTitle={data.subTitle}
            text={data.text}
            hasImg={true}
            src={data.imgSrc}
            alt={data.imgAlt}
            route={data.route}
            btn={true}
            vidUrl={data.vidId}
          />
        ))}
      </div>
    </div>
  );
}
export default LaunchVehicles;
