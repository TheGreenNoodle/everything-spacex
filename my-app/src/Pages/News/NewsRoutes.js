// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import SmallCard from "../../Components/Cards/SmallCard";
import Footer from "../../Components/Footer/Footer";

//Content
import newsRoutes from "../../Content/NewsRoutes";

//CSS
import boxClasses from "../../CSS/Cards/SmallCard/boxClasses.module.css";

function News() {
  return (
    <div>
      <HeadingGroup title={"News"} />
      {newsRoutes.map((data, index) => (
        <SmallCard
          class={boxClasses.newsBox}
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
      <Footer />
    </div>
  );
}
export default News;
