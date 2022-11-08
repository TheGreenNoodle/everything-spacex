//Components
import { useState } from "react";

// Buttons
import MoreInfo from "../../Buttons/RoutingBtn";
import SwitchUnits from "../../Buttons/SwitchUnits";
//Data to get
import weatherContent from "../../../Content/Weather";

//Get Data
import OutputData from "../../GetData/GetWeather/OutputDataSm";

//Loading Animation
import LoadingScreen from "../../GetData/LoadingScreen";
// CSS
import homeCard from "../../../CSS/Cards/Home/homeCards.module.css";

function Weather(props) {
  //button is oppioste of what it is.
  //So the data is in metric but the button says change to imperial
  //when isMetric is true.
  const [isMetric, setIsMetric] = useState(true);
  const [unit, setUnit] = useState("Imperial");

  function changeUnits() {
    isMetric ? setIsMetric(false) : setIsMetric(true);
    isMetric ? setUnit("Metric") : setUnit("Imperial");
  }

  return (
    <div className={homeCard.weatherBox}>
      <h3 className={homeCard.title}>{props.title}</h3>
      <hr className={homeCard.line} />
      <SwitchUnits handleClick={changeUnits} unit={unit} />

      <div className={homeCard.weatherCardsGrid}>
        {weatherContent.map((data, index) => (
          <OutputData
            key={index}
            site={data.site}
            lat={data.lat}
            lon={data.lon}
            showLoader={data.showLoader}
            unit={unit}
            getNewData={isMetric}
          />
        ))}
      </div>

      <div className={homeCard.posBtn}>
        <MoreInfo route={props.route} />
      </div>
    </div>
  );
}

export default Weather;