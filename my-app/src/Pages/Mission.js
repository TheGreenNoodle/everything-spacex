// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import SmallCard from "../Components/Cards/SmallCard";
import Footer from "../Components/Footer/Footer";

//Content
import missionContent from "../Content/Mission";

function Mission() {
  return (
    <div>
      <HeadingGroup title={"Mission"} />
      {missionContent.map((data, index) => (
        <SmallCard
          title={data.title}
          subTitle={data.text}
          btn={false}
          hasImg={false}
        />
      ))}

      <Footer />
    </div>
  );
}
export default Mission;
