// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import LargeCard from "../Components/Cards/LargeCard";
import Footer from "../Components/Footer/Footer";

//Homepage info
import homeContent from "../Content/Home";

function Home() {
  return (
    <div>
      <HeadingGroup title={"Home"} />
      {homeContent.map((data, index) => (
        <LargeCard
          key={index}
          title={data.title}
          text={data.content}
          hasRoute={true}
          route={data.route}
          src={data.imgSrc}
          alt={data.imgAlt}
        />
      ))}
      <Footer />
    </div>
  );
}
export default Home;
