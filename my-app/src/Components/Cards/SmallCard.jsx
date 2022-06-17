// Custom Components
import InfoBtn from "../InfoBtn";
// CSS
import smallCard from "../../CSS/Cards/smallCard.module.css";

function SmallCard(props) {
  return (
    <div className={smallCard.box}>
      <h2>{props.title}</h2>
      <p>{props.subTitle}</p>
      <img className={smallCard.img} src={props.src} alt={props.alt} />
      {props.btn ? (
        <InfoBtn
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
