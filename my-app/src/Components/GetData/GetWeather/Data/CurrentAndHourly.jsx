import unixToTime from "../Functions/unixToTime";

//Components
import GetCurrent from "./GetCurrent";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";

//Responsiveness Carousel
import responsive from "../../../../CSS/Weather/responsiveness";

//CSS
import "react-multi-carousel/lib/styles.css";
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";
import "../../../../CSS/Weather/carousel.css";

function CurrentAndHourly(props) {
  const hourly = props.getHourly;
  const unit = props.unit;

  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("m/s");

  useEffect(() => {
    unit === "Imperial" ? setTempUnit("°F") : setTempUnit("°C");
    unit === "Imperial" ? setWindUnit("mph") : setWindUnit("m/s");
  }, []);

  return (
    <div>
      <Carousel
        itemClass="item"
        centerMode={true}
        minimumTouchDrag={1}
        arrows={false}
        responsive={responsive}
      >
        <div>
          <GetCurrent data={props.getCurrent} unit={props.unit} />
        </div>

        {hourly.slice(1, props.numToGet + 1).map((data, index) => (
          <div key={index} className={weatherCards.box}>
            <h2 className={weatherCards.forecastName}>{unixToTime(data.dt)}</h2>

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
                {data.temp} {tempUnit}
              </p>
              <p>{data.weather[0].main} </p>
            </div>

            <hr className={weatherCards.line} />

            <h4>Wind</h4>
            <p>
              {data.wind_speed} {windUnit}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CurrentAndHourly;
