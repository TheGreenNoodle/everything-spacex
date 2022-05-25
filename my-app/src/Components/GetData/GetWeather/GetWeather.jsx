// Components
import { useEffect, useState } from "react";
// Custom Components
import GetData from "./Data/GetData";
import GetMap from "./Data/GetMap";

import GetCurrent from "./Data/GetCurrent";
import GetHourly from "./Data/GetHourly";
import GetDaily from "./Data/GetDaily";

function GetWeather(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    GetData({ setData, props });
  }, []);

  //remove
  console.log("Location: " + data.location);
  // console.log(props.unit);

  return (
    <div>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div style={{ backgroundColor: "gray" }}>
          <h1>{props.city}</h1>
          <div>Weather map</div>
          <GetMap
            lat={props.lat}
            lon={props.lon}
            zoom={props.zoom}
            layer={props.layer}
          />
          <h1>Todays forecast</h1>
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

export default GetWeather;
