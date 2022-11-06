//Components
import { useState } from "react";

// Custom Components
import MoreInfo from "../../Buttons/RoutingBtn";

//Data to get
import weatherContent from "../../../Content/Weather";

//Get Data
import OutputData from "../../GetData/GetWeather/OutputDataSm";

//Loading Animation
import LoadingScreen from "../../GetData/LoadingScreen";
// CSS
import homeCard from "../../../CSS/Cards/Home/homeCards.module.css";

function Weather(props) {
  return (
    <div className={homeCard.weatherBox}>
      <h3 className={homeCard.title}>{props.title}</h3>
      <hr className={homeCard.line} />

      <div className={homeCard.weatherCardsGrid}>
        {weatherContent.map((data, index) => (
          <OutputData
            key={index}
            site={data.site}
            lat={data.lat}
            lon={data.lon}
            showLoader={data.showLoader}
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
