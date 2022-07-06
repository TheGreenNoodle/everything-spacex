//CSS
import linkCSS from "../../CSS/Footer/link.module.css";

function Link(props) {
  return (
    <div className={linkCSS.linkDiv}>
      <a className={linkCSS.link} href={props.src}>
        <p className={linkCSS.iconText}>
          {props.icon} {props.name}
        </p>
      </a>
    </div>
  );
}

export default Link;
