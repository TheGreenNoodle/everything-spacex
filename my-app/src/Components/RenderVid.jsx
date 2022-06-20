import ReactPlayer from "react-player/lazy";

// CSS
import renderVid from "../CSS/Proflies/renderVid.module.css";

let toggle = false;
function RenderVid(props) {
  return (
    <div className={renderVid.vidBox}>
      <h2>{props.title}</h2>
      <ReactPlayer
        className={renderVid.vidPlayer}
        controls={props.controls}
        loop={props.loop}
        light={props.onlyThumbNail}
        muted={props.muted}
        playing={props.playing}
        url={"http://www.youtube.com/watch?v=" + props.vidId}
        height={renderVid.vidPlayer}
        width={renderVid.vidPlayer}
      />
      <p>{props.desc}</p>
    </div>
  );
}
export default RenderVid;
