// Components
import { useEffect, useState } from "react";

// Custom Components
import GetData from "./Data/GetData";

import Current from "./Data/OutputCurrentSm";

//Loading Animation
import LoadingScreen from "../LoadingScreen";
//CSS
import homeCard from "../../../CSS/Cards/Home/homeCards.module.css";
import weatherCards from "../../../CSS/Cards/Home/weatherCardsSm.module.css";

function OutputDataSm(props) {
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
      {!dataRecived ? (
        <div className={weatherCards.card}>
          <LoadingScreen color={"#FFFFFF"} />
        </div>
      ) : (
        <Current site={props.site} data={data.getCurrent} unit={props.unit} />
      )}
    </div>
  );
}

export default OutputDataSm;
