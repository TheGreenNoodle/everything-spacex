//CSS
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function GetCurrent(props) {
  const current = props.data;
  const unitsImperial = props.unit;

  const units = {
    temp: unitsImperial ? "°F" : "°C",
    windSpeed: unitsImperial ? "mph" : "m/s",
  };

  return (
    <div className={weatherCards.box}>
      <h2 className={weatherCards.forecastDiv}>Current</h2>

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
          {current.temp} {units.temp}
        </p>
        <p>{current.weather[0].main}</p>
      </div>

      <hr className={weatherCards.line} />

      <h4>Visibility</h4>
      <p>{current.visibility} m</p>

      <hr className={weatherCards.line} />

      <h4>Wind</h4>
      <p>
        {current.wind_speed} {units.windSpeed}
      </p>
      <p>{current.wind_deg}°</p>
    </div>
  );
}

export default GetCurrent;
