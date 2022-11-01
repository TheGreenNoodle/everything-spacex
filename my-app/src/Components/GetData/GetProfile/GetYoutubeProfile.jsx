//Components
import { useEffect, useState } from "react";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

//Custom Components
import GetData from "./Data/YoutubeData";
import RenderVid from "../../RenderVid";

function GetYoutubeProfile(props) {
  const [data, setData] = useState([]);
  const [dataRecived, setDataRecived] = useState(false);

  useEffect(() => {
    GetData({ setData, setDataRecived, props });
  });

  return (
    <div>
      {!dataRecived ? (
        <LoadingScreen />
      ) : (
        <div>
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
