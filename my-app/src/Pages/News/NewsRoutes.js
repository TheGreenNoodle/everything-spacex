// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";
import SmallCard from "../../Components/Cards/SmallCard";

//Content
import newsRoutes from "../../Content/NewsRoutes";

function News() {
  return (
    <div>
      <NavBar title={"News"} />

      <div>
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
  );
}
export default News;
