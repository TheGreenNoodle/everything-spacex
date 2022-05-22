// Components
import { useEffect, useState } from "react";
// Custom Components
import GetData from "./GetData";

import GetCurrent from "./GetCurrent";
import GetHourly from "./GetHourly";
import GetDaily from "./GetDaily";

function GetWeather(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    GetData({ setData, props });
  }, []);

  //remove
  console.log("Location: " + data.location);

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
          <h1>Todays forecast</h1>
          <GetCurrent data={data.getCurrent} />
          <h1>Next 14 hours</h1>
          <GetHourly data={data.getHourly} numToGet={14} />
          <h1>7 day forecast</h1>
          <GetDaily data={data.getDaily} />
        </div>
      )}
    </div>
  );
}

export default GetWeather;
