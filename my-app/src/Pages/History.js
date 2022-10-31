// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup.jsx";
import LargeCard from "../Components/Cards/LargeCard";

//Content
import history from "../Content/History";

//CSS
import posContent from "../CSS/posContent.module.css";

function History() {
  return (
    <div>
      <HeadingGroup title={"History"} />

      <div className={posContent.pos}>
        {history.map((data, index) => (
          <LargeCard
            key={index}
            title={data.year}
            text={data.text}
            src={data.imgSrc}
            hasRoute={false}
            alt={data.imgAlt}
          />
        ))}
      </div>
    </div>
  );
}
export default History;
