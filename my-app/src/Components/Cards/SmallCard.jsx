// Custom Components
import InfoBtn from "../InfoBtn";
// CSS
import smallCard from "../../CSS/Cards/smallCard.module.css";

function SmallCard(props) {
  return (
    <div className={smallCard.box}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <img className={smallCard.img} src={props.src} alt={props.alt} />
      <InfoBtn route={props.route} />
    </div>
  );
}

export default SmallCard;
