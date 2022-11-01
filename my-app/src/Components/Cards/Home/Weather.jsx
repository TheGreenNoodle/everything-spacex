// Custom Components
import MoreInfo from "../../Buttons/RoutingBtn";

//Data to get
import weatherContent from "../../../Content/Weather";

//Get Data
import OutputData from "../../GetData/GetWeather/OutputDataSm";

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
          />
        ))}
      </div>

      <MoreInfo route={props.route} />
    </div>
  );
}

export default Weather;
