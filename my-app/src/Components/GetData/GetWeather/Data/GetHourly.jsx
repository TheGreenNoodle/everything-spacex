import unixToTime from "../Functions/unixToTime";

function GetHourly(props) {
  const hourly = props.data;
  const unitsImperial = props.unit === "imperial" ? true : false;

  const units = {
    temp: unitsImperial ? "°F" : "°C",
    windSpeed: unitsImperial ? "mph" : "m/s",
  };

  return (
    <div>
      {!hourly ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {hourly.slice(1, props.numToGet + 1).map((data, index) => (
            <div key={index} style={{ backgroundColor: "orange" }}>
              <p>Time: {unixToTime(data.dt)} </p>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  "@2x.png"
                }
                alt="weather-icon"
              />
              <p>{data.weather[0].main}</p>
              <p>
                Temp {data.temp} {units.temp}
              </p>
              <p>Possibility of {data.weather[0].description}.</p>
              <p>Visibility {data.visibility} m</p>
              <p>Wind</p>
              <p>
                {data.wind_speed} {units.windSpeed}
              </p>
              <p>{data.wind_deg}°</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetHourly;
