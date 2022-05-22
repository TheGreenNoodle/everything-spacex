function GetCurrent(props) {
  const current = props.data;

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
          <p>Temp {current.temp}</p>
          <p>There is {current.weather[0].description}.</p>
          <p>Visibility {current.visibility}</p>
          <p>Wind speed {current.wind_speed}</p>
          <p>Wind deg {current.wind_deg}</p>
        </div>
      )}
    </div>
  );
}

export default GetCurrent;
