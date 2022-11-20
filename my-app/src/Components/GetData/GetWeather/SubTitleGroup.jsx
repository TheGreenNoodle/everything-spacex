//CSS
import styles from "../../../CSS/Weather/SubTitleGroup.module.css";

function SubTitleGroup(props) {
  return (
    <div className={styles.box}>
      <div className={styles.headerBox}>
        <h2 className={styles.title}>{props.subTitle}</h2>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

export default SubTitleGroup;
