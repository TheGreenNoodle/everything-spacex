// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";
import SmallCard from "../../Components/Cards/SmallCard";

//Content
import newsRoutes from "../../Content/NewsRoutes";

//CSS
import grid from "../../CSS/PostionContent/posContent.module.css";
import posContent from "../../CSS/PostionContent/posContent.module.css";

function News() {
  return (
    <div>
      <NavBar title={"News"} />

      <div className={posContent.pos}>
        <div className={grid.pos}>
          {newsRoutes.map((data, index) => (
            <SmallCard
              key={index}
              title={data.title}
              subTitle={data.subTitle}
              route={data.route}
              btn={true}
              hasImg={true}
              src={data.imgSrc}
              alt={data.imgAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default News;
