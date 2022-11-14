// Components
import { useEffect, useState } from "react";

// Custom Components
import GetData from "./Data/GetData";
import CurrentAndHourly from "./Data/OutputCurrentAndHourly";
import Daily from "./Data/OutputDaily";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

//CSS
import outputWeather from "../../../CSS/Weather/outputWeather.module.css";

function OutputWeatherData(props) {
  const [data, setData] = useState({});
  const [dataRecived, setDataRecived] = useState(false);

  //When unit is changed it reloads the data.
  //This is done by props.getNewData
  useEffect(() => {
    setDataRecived(false);
    GetData({ setData, setDataRecived, props });
  }, [props.getNewData]);

  return (
    <div>
      <h1 className={outputWeather.headers}>{props.site}</h1>
      {!dataRecived ? (
        <div>
          <LoadingScreen color={"#FFFFFF"} />
        </div>
      ) : (
        <div className={outputWeather.box}>
          <CurrentAndHourly
            getCurrent={data.getCurrent}
            getHourly={data.getHourly}
            unit={props.unit}
            numToGet={14}
          />

          <div>
            <Daily data={data.getDaily} unit={props.unit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OutputWeatherData;
