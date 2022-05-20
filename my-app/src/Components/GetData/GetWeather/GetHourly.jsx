import unixToTime from "./unixToTime";

function GetHourly(props) {
  const hourlyData = props.data.perHour;

  return (
    <div>
      {!hourlyData ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {hourlyData.slice(1, props.numToGet + 1).map((data, index) => (
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
              <p>Temp {data.temp}</p>
              <p>Possibility of {data.weather[0].description}.</p>
              <p>Visibility {data.visibility}</p>
              <p>Wind speed {data.wind_speed}</p>
              <p>Wind deg {data.wind_deg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetHourly;
