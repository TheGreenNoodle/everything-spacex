// Custom Components
import InfoBtn from "../InfoBtn";
// CSS
import cardCss from "../../CSS/Cards/largeCard.module.css";

function LargeCard(props) {
  return (
    <div className={cardCss.textImgBox}>
      <div className={cardCss.textBox}>
        <h2 className={cardCss.title}>{props.title}</h2>
        <p className={cardCss.text}>{props.text}</p>
        {props.hasRoute ? <InfoBtn route={props.route} /> : null}
      </div>
      <div className={cardCss.imgBox}>
        <img className={cardCss.img} src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

export default LargeCard;
