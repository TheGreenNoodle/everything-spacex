// Custom Components
import NavBar from "../../Components/Heading/NavBar";
import SmallCard from "../../Components/Cards/SmallCard";
import RenderVid from "../../Components/Videos/VehicleDemo";

//Content
import data from "../../Content/LaunchVehicles";

//CSS
import grid from "../../CSS/PostionContent/LaunchVehicles.module.css";
import posContent from "../../CSS/PostionContent/posContent.module.css";

function LaunchVehicles() {
  return (
    <div>
      <NavBar title={"Launch Vehicles"} />

      <div className={posContent.pos}>
        <div className={grid.vehicleDemo}>
          {data.map((data, index) => (
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
    </div>
  );
}
export default LaunchVehicles;
