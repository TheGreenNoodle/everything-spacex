// Custom Components
import MoreInfo from "../Buttons/RoutingBtn";

// CSS
import smallCard from "../../CSS/Cards/SmallCard/smallCard.module.css";

function SmallCard(props) {
  return (
    <div className={props.class}>
      <h3 className={smallCard.title}>{props.title}</h3>
      <p className={smallCard.text}>{props.subTitle}</p>
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
