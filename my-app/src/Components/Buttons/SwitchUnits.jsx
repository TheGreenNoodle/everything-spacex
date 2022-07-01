//CSS
import routing from "../../CSS/Buttons/btn.module.css";

function SwitchUnits(props) {
  return (
    <div>
      <button onClick={props.handleClick} type="button" className={routing.btn}>
        {props.unit}
      </button>
    </div>
  );
}

export default SwitchUnits;
