//Components
import { useEffect, useState } from "react";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

//Custom Components
import GetData from "./Data/YoutubeData";
import RenderVid from "../../Videos/RenderVid";

//CSS
import grid from "../../../CSS/PostionContent/Youtube.module.css";

function GetYoutubeProfile(props) {
  const [data, setData] = useState([]);
  const [dataRecived, setDataRecived] = useState(false);

  useEffect(() => {
    GetData({ setData, setDataRecived, props });
  }, []);

  return (
    <div>
      {!dataRecived ? (
        <div className={grid.centerLoading}>
          <LoadingScreen color={"#3F3F3F"} />
        </div>
      ) : (
        <div className={grid.wrapper}>
          {data.map((data, index) => (
            <div key={index}>
              <RenderVid
                controls={true}
                playing={false}
                loop={false}
                muted={false}
                onlyThumbNail={true}
                vidId={data.snippet.resourceId.videoId}
                title={data.snippet.title}
                hasHeader={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetYoutubeProfile;
