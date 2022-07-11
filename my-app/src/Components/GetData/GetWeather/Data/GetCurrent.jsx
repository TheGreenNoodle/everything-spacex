import { useEffect, useState } from "react";

//CSS
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function GetCurrent(props) {
  const current = props.data;
  const unit = props.unit;

  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("m/s");

  useEffect(() => {
    unit === "Imperial" ? setTempUnit("°F") : setTempUnit("°C");
    unit === "Imperial" ? setWindUnit("mph") : setWindUnit("m/s");
  }, []);

  return (
    <div className={weatherCards.box}>
      <h2 className={weatherCards.forecastName}>Curr.</h2>

      <hr className={weatherCards.line} />

      <div className={weatherCards.iconGroup}>
        <img
          src={
            "https://openweathermap.org/img/wn/" +
            current.weather[0].icon +
            "@2x.png"
          }
          alt="weather-icon"
        />

        <p>
          {current.temp} {tempUnit}
        </p>
        <p>{current.weather[0].main}</p>
      </div>

      <hr className={weatherCards.line} />

      <h4>Wind</h4>
      <p>
        {current.wind_speed} {windUnit}
      </p>
    </div>
  );
}

export default GetCurrent;
