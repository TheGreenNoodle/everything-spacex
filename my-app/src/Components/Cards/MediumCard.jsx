// CSS
import mediumCard from "../../CSS/Cards/mediumCard.module.css";

function MediumCard(props) {
  return (
    <div className={mediumCard.box}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default MediumCard;
