// Custom Components
import NavBar from "../../Components/Heading/NavBar";
import SmallCard from "../../Components/Cards/SmallCard";
import RenderVid from "../../Components/Videos/VehicleDemo";

//Content
import vehiclesContent from "../../Content/LaunchVehicles";

//CSS
import posContent from "../../CSS/PostionContent/LaunchVehicles.module.css";

function LaunchVehicles() {
  return (
    <div>
      <NavBar title={"Launch Vehicles"} />

      <div className={posContent.vehicleDemo}>
        {vehiclesContent.map((data, index) => (
          <RenderVid
            key={index}
            controls={true}
            playing={false}
            loop={false}
            muted={false}
            onlyThumbNail={false}
            vidId={data.vidId}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
}
export default LaunchVehicles;
