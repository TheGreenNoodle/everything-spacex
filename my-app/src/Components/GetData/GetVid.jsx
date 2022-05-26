import axios from "axios";
import ReactPlayer from "react-player/lazy";

// CSS
import getVid from "../../CSS/GetNews/getVid.module.css";

function GetVid(props) {
  return (
    <div className={getVid.vidBox}>
      <ReactPlayer
        className={getVid.vidPlayer}
        controls={props.controls}
        loop={props.loop}
        muted={props.muted}
        playing={props.playing}
        url={props.url}
        width={getVid.vidPlayer}
      />
    </div>
  );
}
export default GetVid;
