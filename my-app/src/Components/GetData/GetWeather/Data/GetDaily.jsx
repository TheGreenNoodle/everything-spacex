import unixToDate from "../Functions/unixToDate";

//CSS
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function GetDaily(props) {
  const daily = props.data;
  const unitsImperial = props.unit === "imperial" ? true : false;

  const units = {
    temp: unitsImperial ? "°F" : "°C",
  };
  return (
    <div>
      {!daily ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={weatherCards.scroll}>
          {daily.slice(1, 8).map((data, index) => (
            <div key={index} className={weatherCards.currentBox}>
              <h2 className={weatherCards.forecastTime}>
                {unixToDate(data.dt)}
              </h2>

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
                  {data.temp.day} {units.temp}
                </p>
                <p>{data.weather[0].main}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetDaily;
