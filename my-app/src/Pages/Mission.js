// Custom Components
import NavBar from "../Components/Heading/NavBar.jsx";
import SmallCard from "../Components/Cards/SmallCard";

//Content
import missionContent from "../Content/Mission";

//CSS
import grid from "../CSS/PostionContent/Mission.module.css";

function Mission() {
  return (
    <div>
      <NavBar title={"Mission"} />

      <div className={grid.wrapper}>
        {missionContent.map((data, index) => (
          <SmallCard
            key={index}
            title={data.title}
            subTitle={data.text}
            btn={false}
            hasImg={false}
          />
        ))}
      </div>
    </div>
  );
}
export default Mission;
