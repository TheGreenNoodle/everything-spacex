//Components
import { useNavigate } from "react-router";

//CSS
import routing from "../../CSS/Buttons/btn.module.css";

function Routing(props) {
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
      <button onClick={handleClick} type="button" className={routing.btn}>
        LEARN MORE
      </button>
    </div>
  );
}

export default Routing;
