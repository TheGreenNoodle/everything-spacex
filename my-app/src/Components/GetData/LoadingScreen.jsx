import { ThreeDots } from "react-loader-spinner";

//CSS
import loadingAnimation from "../../CSS/LoadingScreen/loading.module.css";
function LoadingScreen(props) {
  return (
    <div className={loadingAnimation.loader}>
      <ThreeDots
        height="50"
        width="50"
        color={props.color}
        ariaLabel="loading"
      />
    </div>
  );
}

export default LoadingScreen;
