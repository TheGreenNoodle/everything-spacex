//Components
import ReactPlayer from "react-player/youtube";

// CSS
import renderVid from "../../CSS/VideoNews/vehicleDemo.module.css";

function RenderVid(props) {
  return (
    <div className={renderVid.wrapper}>
      <div className={renderVid.descBox}>
        <h1 className={renderVid.title}>{props.title}</h1>
        <hr className={renderVid.line} />
        <h4 className={renderVid.desc}>{props.text}</h4>
      </div>

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
    </div>
  );
}
export default RenderVid;
