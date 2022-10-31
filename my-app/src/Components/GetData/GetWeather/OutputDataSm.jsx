// Components
import { useEffect, useState } from "react";

// Custom Components
import GetData from "./Data/GetData";
import Current from "./Data/OutputCurrentSm";

//Loading Animation
import LoadingScreen from "../LoadingScreen";

function OutputDataSm(props) {
  const [data, setData] = useState({});
  const [dataRecived, setDataRecived] = useState(false);

  //When unit is changed it reloads the data.
  //This is done by props.getNewData
  useEffect(() => {
    setDataRecived(false);
    GetData({ setData, setDataRecived, props });
  }, [props.getNewData]);

  console.log(data);
  return (
    <div>
      {!dataRecived ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <Current />
      )}
    </div>
  );
}

export default OutputDataSm;
