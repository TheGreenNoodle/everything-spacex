// Custom Components
import MoreInfo from "../Buttons/RoutingBtn";
// CSS
import cardCss from "../../CSS/Cards/largeCard.module.css";

function LargeCard(props) {
  return (
    <div className={cardCss.box}>
      <h3 className={cardCss.title}>{props.title}</h3>
      <img className={cardCss.img} src={props.src} alt={props.alt} />
      <p className={cardCss.text}>{props.text}</p>
      {props.hasRoute ? <MoreInfo route={props.route} /> : null}
    </div>
  );
}

export default LargeCard;
