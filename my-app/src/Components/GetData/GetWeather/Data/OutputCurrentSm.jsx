import { useEffect, useState } from "react";

//CSS
import weatherCards from "../../../../CSS/Cards/Home/weatherCardsSm.module.css";

function GetCurrent(props) {
  const current = props.data;
  const unit = props.unit;

  const [tempUnit, setTempUnit] = useState("°C");
  const [windUnit, setWindUnit] = useState("m/s");

  useEffect(() => {
    unit === "Imperial" ? setTempUnit("°F") : setTempUnit("°C");
    unit === "Imperial" ? setWindUnit("mph") : setWindUnit("m/s");
  });

  return (
    <div className={weatherCards.card}>
      <p className={weatherCards.forecastName}>{props.site}</p>

      <div className={weatherCards.iconGroup}>
        <img
          src={
            "https://openweathermap.org/img/wn/" +
            current.weather[0].icon +
            "@2x.png"
          }
          alt="weather-icon"
        />

        <p className={weatherCards.forecastName}>
          {current.temp} {tempUnit}
        </p>
      </div>
    </div>
  );
}

export default GetCurrent;
