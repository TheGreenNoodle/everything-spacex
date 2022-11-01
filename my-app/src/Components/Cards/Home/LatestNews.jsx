//Components
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

// Custom Components
import MoreInfo from "../../Buttons/RoutingBtn";
import GetData from "../../GetData/GetProfile/Data/YoutubeData";

//Loading Animation
import LoadingScreen from "../../GetData/LoadingScreen";
// CSS
import homeCard from "../../../CSS/Cards/Home/homeCards.module.css";
import latestNews from "../../../CSS/Cards/Home/latestNews.module.css";

function LatestNews(props) {
  const [data, setData] = useState([]);
  const [dataRecived, setDataRecived] = useState(false);

  useEffect(() => {
    GetData({ setData, setDataRecived, props });
  });

  return (
    <div className={homeCard.card}>
      <h3 className={homeCard.title}>{props.title}</h3>
      <hr className={homeCard.line} />

      <div className={latestNews.videoPlayerDiv}>
        {data.map((data, index) => (
          <div key={index}>
            <ReactPlayer
              controls={true}
              loop={false}
              light={false}
              muted={false}
              playing={false}
              url={
                "http://www.youtube.com/watch?v=" +
                data.snippet.resourceId.videoId
              }
              height={latestNews.videoPlayer}
              width={latestNews.videoPlayer}
            />
          </div>
        ))}
      </div>

      <MoreInfo route={props.route} />
    </div>
  );
}

export default LatestNews;
