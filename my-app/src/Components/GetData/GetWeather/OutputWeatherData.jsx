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

  //When unit is changed it reloads the data.
  //This is done by props.getNewData
  useEffect(() => {
    setGotData(false);
    GetData({ setData, setGotData });
  }, [props.getNewData]);

  return (
    <div>
      <h1 className={outputWeather.headers}>{props.site}</h1>
      {!gotData ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div className={outputWeather.box}>
          <CurrentAndHourly
            gotData={gotData}
            getCurrent={data.getCurrent}
            getHourly={data.getHourly}
            unit={props.unit}
            numToGet={14}
          />

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
