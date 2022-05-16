import ReactPlayer from "react-player/lazy";

// CSS
import getVid from "../CSS/GetNews/getVid.module.css";

function GetVid(props) {
  return (
    <div className={getVid.vidBox}>
      <ReactPlayer
        className={getVid.vidPlayer}
        url={props.url}
        playing={true}
        loop={true}
        muted={true}
        width={getVid.vidPlayer}
      />
    </div>
  );
}
export default GetVid;
