import { useNavigate } from "react-router";

function InfoBtn(props) {
  const navigate = useNavigate();

  function handleClick() {
    // Title text and vidUrl all come from Cards compents.
    // When the button clicked they are sent over.

    // navigate sends the data to the route that is specified.
    // There useLocation is used to get that data.
    navigate(props.route, {
      state: { title: props.title, text: props.text, vidUrl: props.vidUrl },
    });
  }

  return (
    <div>
      <button onClick={handleClick} type="button" className="btn btn-primary">
        More Info
      </button>
    </div>
  );
}

export default InfoBtn;
