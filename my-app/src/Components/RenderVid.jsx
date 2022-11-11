//Components
import ReactPlayer from "react-player/youtube";

// CSS
import renderVid from "../CSS/VideoNews/renderVid.module.css";

function RenderVid(props) {
  return (
    <div className={renderVid.wrapper}>
      <div className={renderVid.vidBox}>
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
      </div>

      <div className={renderVid.headerBox}>
        <h3 className={renderVid.header}>{props.title}</h3>
      </div>
    </div>
  );
}
export default RenderVid;
