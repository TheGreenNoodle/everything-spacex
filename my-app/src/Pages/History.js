// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup.jsx";
import LargeCard from "../Components/Cards/LargeCard";

function History() {
  return (
    <div>
      <HeadingGroup title={"History"} />
      <LargeCard
        title="2002"
        text="SpaceX founding."
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jwfa6idwrsflicfh_1617443128.jpeg"
        hasRoute={false}
        alt="mars-img"
      />
    </div>
  );
}
export default History;
