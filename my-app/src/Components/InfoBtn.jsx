import { Link } from "react-router-dom";

function InfoBtn(props) {
  return (
    <div>
      <Link to={props.route}>
        <button type="button" className="btn btn-primary">
          More Info
        </button>
      </Link>
    </div>
  );
}

export default InfoBtn;
