import unixToTime from "../Functions/unixToTime";

//Components
import GetCurrent from "./GetCurrent";
import { Carousel } from "react-responsive-carousel";

//CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function CurrentAndHourly(props) {
  const hourly = props.getHourly;
  const unitsImperial = props.unit === "imperial" ? true : false;

  const units = {
    temp: unitsImperial ? "°F" : "°C",
    windSpeed: unitsImperial ? "mph" : "m/s",
  };

  return (
    <div>
      <Carousel>
        <div>
          <GetCurrent data={props.getCurrent} unit={props.unit} />
        </div>

        {hourly.slice(1, props.numToGet + 1).map((data, index) => (
          <div key={index} className={weatherCards.box}>
            <h2 className={weatherCards.forecastTime}>{unixToTime(data.dt)}</h2>

            <hr className={weatherCards.line} />

            <div className={weatherCards.iconGroup}>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  "@2x.png"
                }
                alt="weather-icon"
              />

              <p>
                {data.temp} {units.temp}
              </p>
              <p>{data.weather[0].main}</p>
            </div>

            <hr className={weatherCards.line} />
            <h4>Visibility</h4>
            <p>{data.visibility} m</p>

            <hr className={weatherCards.line} />

            <h4>Wind</h4>
            <p>
              {data.wind_speed} {units.windSpeed}
            </p>
            <p>{data.wind_deg}°</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CurrentAndHourly;
