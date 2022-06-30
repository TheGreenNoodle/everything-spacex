// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup.jsx";
import LargeCard from "../Components/Cards/LargeCard";
import Footer from "../Components/Footer/Footer";

//Content
import history from "../Content/History";

function History() {
  return (
    <div>
      <HeadingGroup title={"History"} />
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

      <Footer />
    </div>
  );
}
export default History;
