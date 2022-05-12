// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import MediumCard from "../Components/Cards/MediumCard";

function Goals() {
  return (
    <div>
      <HeadingGroup title={"Goals"} />
      <MediumCard title={"title"} text={"text"} />{" "}
      <MediumCard title={"title2"} text={"text2"} />{" "}
      <MediumCard title={"title3"} text={"text3"} />
    </div>
  );
}
export default Goals;
