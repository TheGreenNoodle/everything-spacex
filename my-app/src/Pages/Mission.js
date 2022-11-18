// Custom Components
import NavBar from "../Components/Heading/NavBar.jsx";
import SmallCard from "../Components/Cards/SmallCard";

//Content
import missionContent from "../Content/Mission";

//CSS

function Mission() {
  return (
    <div>
      <NavBar title={"Mission"} />

      <div>
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
