//CSS
import "../../CSS/Heading/navBar.css";

function ButtonAnimation(btn) {
  const enterBtn = btn.current;

  let round = document.createElement("div");

  round.classList.add("circle");
  round.classList.add("anim");

  enterBtn.appendChild(round);

  setTimeout(function () {
    round.remove();
  }, 3000);
}

export default ButtonAnimation;
