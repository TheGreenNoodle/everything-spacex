//Function
import unixToTime from "../Functions/unixToTime";

//Components
import GetCurrent from "./OutputCurrent";
import SubTitle from "../SubTitleGroup";

import { useEffect, useState } from "react";

//CSS
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function CurrentAndHourly(props) {
  const hourly = props.getHourly;
  const unit = props.unit;

  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("m/s");

  useEffect(() => {
    unit === "Imperial" ? setTempUnit("°F") : setTempUnit("°C");
    unit === "Imperial" ? setWindUnit("mph") : setWindUnit("m/s");
  });

  return (
    <div>
      <SubTitle subTitle="Hourly" />

      <div className={weatherCards.grid}>
        <GetCurrent data={props.getCurrent} unit={props.unit} />

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
      </div>
    </div>
  );
}

export default CurrentAndHourly;
