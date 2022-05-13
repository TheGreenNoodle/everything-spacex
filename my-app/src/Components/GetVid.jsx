import ReactPlayer from "react-player/lazy";

function GetVid(props) {
  return (
    <div>
      <ReactPlayer url={props.url} playing={true} />
    </div>
  );
}
export default GetVid;
