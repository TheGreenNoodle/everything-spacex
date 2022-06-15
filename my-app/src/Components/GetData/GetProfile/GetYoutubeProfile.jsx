//Components
import axios from "axios";
import { useEffect, useState } from "react";
//Custom Components
import GetData from "./Data/YoutubeData";
import RenderVid from "../../RenderVid";

function GetYoutubeProfile(props) {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    GetData({ setProfileData, props });
  }, []);

  return (
    <div>
      {!setProfileData ? (
        <p>Loading...</p>
      ) : (
        <div>
          {profileData.map((data, index) => (
            <div key={index}>
              <RenderVid
                controls={true}
                playing={false}
                loop={false}
                muted={false}
                vidId={data.snippet.resourceId.videoId}
                title={data.snippet.title}
                desc={data.snippet.description}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetYoutubeProfile;
