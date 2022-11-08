// Custom Components
import NavBar from "../Components/Heading/NavBar.jsx";
import LargeCard from "../Components/Cards/LargeCard";

//Content
import history from "../Content/History";

//CSS
import posContent from "../CSS/PostionContent/History.module.css";

function History() {
  return (
    <div>
      <NavBar title={"History"} />

      <div className={posContent.history}>
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
