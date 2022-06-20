import unixToDate from "../Functions/unixToDate";

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
        <div>
          {daily.slice(1, 8).map((data, index) => (
            <div key={index}>
              <p>{unixToDate(data.dt)}</p>
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
                Temp {data.temp.day} {units.temp}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetDaily;
