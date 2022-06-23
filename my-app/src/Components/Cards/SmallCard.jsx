// Custom Components
import MoreInfo from "../Buttons/RoutingBtn";
// CSS
import smallCard from "../../CSS/Cards/smallCard.module.css";

function SmallCard(props) {
  return (
    <div className={smallCard.box}>
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
      {props.hasImg ? (
        <img className={smallCard.img} src={props.src} alt={props.alt} />
      ) : null}
      {props.btn ? (
        <MoreInfo
          title={props.title}
          text={props.text}
          route={props.route}
          vidUrl={props.vidUrl}
        />
      ) : null}
    </div>
  );
}

export default SmallCard;
