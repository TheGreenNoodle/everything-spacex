//CSS
import routing from "../../CSS/Buttons/btn.module.css";

function SwitchUnits(props) {
  return (
    <button
      className={routing.bigBtnHome}
      onClick={props.handleClick}
      type="button"
    >
      {props.unit}
    </button>
  );
}

export default SwitchUnits;
