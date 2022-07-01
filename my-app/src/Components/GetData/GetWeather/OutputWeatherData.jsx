// Components
import { useEffect, useState } from "react";

// Custom Components
import GetData from "./Data/WeatherData";
import CurrentAndHourly from "./Data/CurrentAndHourly";
import GetDaily from "./Data/GetDaily";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

//CSS
import outputWeather from "../../../CSS/Weather/outputWeather.module.css";

function OutputWeatherData(props) {
  const [data, setData] = useState({});
  const [gotData, setGotData] = useState(false);

  useEffect(() => {
    setGotData(false);
    GetData({ setData, setGotData, props });
  }, [props.getNewData]);

  return (
    <div>
      {!gotData ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div className={outputWeather.box}>
          <h1 className={outputWeather.headers}>{props.city}</h1>

          <CurrentAndHourly
            gotData={gotData}
            getCurrent={data.getCurrent}
            getHourly={data.getHourly}
            unit={props.unit}
            numToGet={14}
          />

          <h1 className={outputWeather.headers}>7 Days</h1>

          <div>
            <GetDaily
              gotData={gotData}
              data={data.getDaily}
              unit={props.unit}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OutputWeatherData;
