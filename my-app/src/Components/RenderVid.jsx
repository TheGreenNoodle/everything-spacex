//Components
import ReactPlayer from "react-player/lazy";

// CSS
import renderVid from "../CSS/Proflies/renderVid.module.css";

function RenderVid(props) {
  return (
    //add loading for when video dose not come in.
    <div className={renderVid.vidBox}>
      {props.hasHeader ? (
        <div>
          <h3 className={renderVid.header}>{props.title}</h3>
          <hr className={renderVid.line} />
        </div>
      ) : null}

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

      <p className={renderVid.desc}>{props.desc}</p>
    </div>
  );
}
export default RenderVid;
