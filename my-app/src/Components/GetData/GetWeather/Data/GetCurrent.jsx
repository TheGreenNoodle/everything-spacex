function GetCurrent(props) {
  const current = props.data;
  const unitsImperial = props.unit;

  console.log("Curremt " + props.unit);
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
        <div>
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              current.weather[0].icon +
              "@2x.png"
            }
            alt="weather-icon"
          />
          <p>{current.weather[0].main}</p>
          <p>
            {current.temp} {units.temp}
          </p>
          <p>There is {current.weather[0].description}.</p>
          <p>Visibility {current.visibility} m</p>
          <p>Wind</p>
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
