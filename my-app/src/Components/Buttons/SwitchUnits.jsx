//CSS
import routing from "../../CSS/Buttons/btn.module.css";

function SwitchUnits(props) {
  return (
    <div>
      <button
        className={routing.bigBtn}
        onClick={props.handleClick}
        type="button"
      >
        {props.unit}
      </button>
    </div>
  );
}

export default SwitchUnits;
