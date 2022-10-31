// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import SmallCard from "../Components/Cards/SmallCard";

//Content
import missionContent from "../Content/Mission";

//CSS
import posContent from "../CSS/posContent.module.css";
import boxClasses from "../CSS/Cards/SmallCard/boxClasses.module.css";

function Mission() {
  return (
    <div>
      <HeadingGroup title={"Mission"} />
      <div className={posContent.pos}>
        {missionContent.map((data, index) => (
          <SmallCard
            class={boxClasses.missionBox}
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
