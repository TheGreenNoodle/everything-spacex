//Components
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

// Custom Components
import MoreInfo from "../../Buttons/RoutingBtn";
import GetData from "../../GetData/GetProfile/Data/YoutubeData";
import Line from "../Line";

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
  }, []);

  return (
    <div className={homeCard.card}>
      <h3 className={homeCard.title}>{props.title}</h3>
      <Line />

      {!dataRecived ? (
        <div className={homeCard.centerLoading}>
          <LoadingScreen color={"#FFFFFF"} />
        </div>
      ) : (
        <div className={latestNews.videoPlayerDiv}>
          {data.map((data, index) => (
            <div key={index}>
              <ReactPlayer
                className={latestNews.videoPlayer}
                controls={true}
                loop={false}
                light={true}
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
      )}

      <div className={homeCard.posBtn}>
        <MoreInfo route={props.route} />
      </div>
    </div>
  );
}

export default LatestNews;
