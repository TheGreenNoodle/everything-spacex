//CSS
import currentWeatherCSS from "../../../../CSS/Weather/current.module.css";

function GetCurrent(props) {
  const current = props.data;
  const unitsImperial = props.unit;

  const units = {
    temp: unitsImperial ? "°F" : "°C",
    windSpeed: unitsImperial ? "mph" : "m/s",
  };

  return (
    <div>
      {!current ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={currentWeatherCSS.currentBox}>
          <h2>Current Forecast</h2>
          <div className={currentWeatherCSS.tempAndDesc}>
            <img
              className={currentWeatherCSS.img}
              src={
                "https://openweathermap.org/img/wn/" +
                current.weather[0].icon +
                "@2x.png"
              }
              alt="weather-icon"
            />
            <p className={currentWeatherCSS.desc}>{current.weather[0].main}</p>
            <p className={currentWeatherCSS.temp}>
              {current.temp} {units.temp}
            </p>
          </div>
          <h4>Visibility</h4>
          <p>{current.visibility} m</p>

          <h4>Wind</h4>
          <p>
            {current.wind_speed} {units.windSpeed}
          </p>
          <p>{current.wind_deg}°</p>
        </div>
      )}
    </div>
  );
}

export default GetCurrent;
