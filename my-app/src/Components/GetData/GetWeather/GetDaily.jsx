import unixToDate from "./unixToDate";

function GetDaily(props) {
  const daily = props.data;
  return (
    <div>
      {!daily ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {daily.slice(1, 8).map((data, index) => (
            <div key={index} style={{ backgroundColor: "green" }}>
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
              <p>Temp {data.temp.day}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetDaily;
