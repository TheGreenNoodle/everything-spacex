//Components
import axios from "axios";
import { useEffect, useState } from "react";
//Custom Components
import GetData from "./Data/YoutubeData";
import RenderVid from "../../RenderVid";

function GetYoutubeProfile(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    GetData({ setData, props });
  }, []);

  // <RenderVid
  //   controls={true}
  //   playing={false}
  //   loop={false}
  //   muted={false}
  //   vidId="v6bd1NPRSpo"
  //   title="example vid"
  //   desc="example desc"
  // />
  return (
    <div>{!data ? <p>Loading...</p> : <div>{console.log(data)}</div>}</div>
  );
}

export default GetYoutubeProfile;
