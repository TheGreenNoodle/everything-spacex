import ReactPlayer from "react-player/lazy";

// CSS
import renderVid from "../CSS/GetNews/renderVid.module.css";

function RenderVid(props) {
  return (
    <div className={renderVid.vidBox}>
      <h2>{props.title}</h2>
      <ReactPlayer
        className={renderVid.vidPlayer}
        controls={props.controls}
        loop={props.loop}
        muted={props.muted}
        playing={props.playing}
        url={"http://www.youtube.com/watch?v=" + props.vidId}
        width={renderVid.vidPlayer}
      />
      <p>{props.desc}</p>
    </div>
  );
}
export default RenderVid;
