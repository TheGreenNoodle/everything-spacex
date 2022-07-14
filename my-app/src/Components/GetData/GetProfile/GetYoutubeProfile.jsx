//Components
import { useEffect, useState } from "react";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

//Custom Components
import GetData from "./Data/YoutubeData";
import RenderVid from "../../RenderVid";

function GetYoutubeProfile(props) {
  const [profileData, setProfileData] = useState([]);
  const [gotData, setGotData] = useState(false);

  useEffect(() => {
    GetData({ setProfileData, setGotData, props });
  });

  return (
    <div>
      {!gotData ? (
        <LoadingScreen />
      ) : (
        <div>
          {profileData.map((data, index) => (
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
