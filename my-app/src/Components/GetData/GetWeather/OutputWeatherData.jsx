// Components
import { useEffect, useState } from "react";
// Custom Components
import GetData from "./Data/WeatherData";

import GetCurrent from "./Data/GetCurrent";
import GetHourly from "./Data/GetHourly";
import GetDaily from "./Data/GetDaily";

//CSS
import outputWeatherCSS from "../../../CSS/Weather/outputWeather.module.css";
function OutputWeatherData(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    GetData({ setData, props });
  }, []);

  return (
    <div>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1>{props.city}</h1>

          <div className={outputWeatherCSS.scroll}>
            <GetCurrent data={data.getCurrent} unit={props.unit} />
            <GetHourly data={data.getHourly} unit={props.unit} numToGet={14} />
          </div>
          <h1>7 day forecast</h1>

          <div>
            <GetDaily data={data.getDaily} unit={props.unit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OutputWeatherData;
