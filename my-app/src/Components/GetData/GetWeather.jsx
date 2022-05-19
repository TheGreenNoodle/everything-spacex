// Components
import axios from "axios";
import { useEffect, useState } from "react";

function GetWeather(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "/api/weather",
      params: {
        lat: props.lat,
        lon: props.lon,
        unit: props.unit,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData({
          icon:
            "http://openweathermap.org/img/wn/" +
            response.data.current.weather[0].icon +
            "@2x.png",
          temp: response.data.current.temp,
          description: response.data.current.weather[0].description,
          rainChance: response.data.current.rain,
          visibility: response.data.current.visibility,
          windSpeed: response.data.current.wind_speed,
          windDeg: response.data.current.wind_deg,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>{data.temp}</p>
          <h1>{props.city}</h1>
          <div>Weather map</div>
          <h1>Todays forecast</h1>
          <img src={data.icon} alt="weather-icon" />
          <p>Temp {data.temp}</p>
          <p>There is {data.description}.</p>
          <p>Visibility {data.visibility}</p>
          <p>Wind speed {data.windSpeed}</p>
          <p>Wind deg {data.windDeg}</p>
          <h1>7 day forecast</h1>
        </div>
      )}
    </div>
  );
}

export default GetWeather;
