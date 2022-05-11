function LargeCard(props) {
  return (
    <div className="textImgBox">
      <div className="textBox">
        <h2 className="title">{props.title}</h2>
        <p className="desc">{props.desc}</p>
      </div>
      <div className="imgBox">
        <img className="img" src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}

export default LargeCard;
