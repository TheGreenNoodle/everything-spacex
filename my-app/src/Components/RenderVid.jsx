import ReactPlayer from "react-player/lazy";

// CSS
import renderVid from "../CSS/GetNews/renderVid.module.css";

function RenderVid(props) {
  return (
    <div className={renderVid.vidBox}>
      <ReactPlayer
        className={renderVid.vidPlayer}
        controls={props.controls}
        loop={props.loop}
        muted={props.muted}
        playing={props.playing}
        url={props.url}
        width={renderVid.vidPlayer}
      />
    </div>
  );
}
export default RenderVid;
