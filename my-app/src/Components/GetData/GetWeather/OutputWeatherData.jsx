// Components
import { useEffect, useState } from "react";
// Custom Components
import GetData from "./Data/WeatherData";

import GetCurrent from "./Data/GetCurrent";
import GetHourly from "./Data/GetHourly";
import GetDaily from "./Data/GetDaily";

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
          <GetCurrent data={data.getCurrent} unit={props.unit} />
          <h1>Next 14 hours</h1>
          <GetHourly data={data.getHourly} unit={props.unit} numToGet={14} />
          <h1>7 day forecast</h1>
          <GetDaily data={data.getDaily} unit={props.unit} />
        </div>
      )}
    </div>
  );
}

export default OutputWeatherData;