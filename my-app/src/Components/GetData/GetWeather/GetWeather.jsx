// Components
import { useEffect, useState } from "react";
// Custom Components
import GetData from "./GetData";
import GetHourly from "./GetHourly";

function GetWeather(props) {
  const [data, setData] = useState({ title: "yee" });
  useEffect(() => {
    GetData({ setData, props });
    GetHourly({ data });
  }, []);

  console.log("Location: " + data.location);
  // console.log(data);

  return (
    <div>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1>{props.city}</h1>
          <div>Weather map</div>
          <h1>Todays forecast</h1>
          <img src={data.icon} alt="weather-icon" />
          <p>Temp {data.temp}</p>
          <p>There is {data.description}.</p>
          <p>Visibility {data.visibility}</p>
          <p>Wind speed {data.windSpeed}</p>
          <p>Wind deg {data.windDeg}</p>
          <h1>Next 10 hours</h1>

          <h1>7 day forecast</h1>
        </div>
      )}
    </div>
  );
}

export default GetWeather;
