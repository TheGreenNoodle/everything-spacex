//Functions
import unixToDate from "../Functions/unixToDate";

//Components
import { useEffect, useState } from "react";

//Custom Components
import SubTitle from "../SubTitleGroup";

//CSS
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function GetDaily(props) {
  const daily = props.data;
  const unit = props.unit;

  const [tempUnit, setTempUnit] = useState("°C");

  useEffect(() => {
    unit === "Imperial" ? setTempUnit("°F") : setTempUnit("°C");
  });

  return (
    <div>
      <SubTitle subTitle="Daily" />

      <div className={weatherCards.grid}>
        {daily.slice(1, 5).map((data, index) => (
          <div key={index} className={weatherCards.box}>
            <h2 className={weatherCards.forecastName}>{unixToDate(data.dt)}</h2>

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
                {data.temp.day} {tempUnit}
              </p>
              <p>{data.weather[0].main}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetDaily;
