//Components
import { useState } from "react";
import { useLocation } from "react-router";

// Custom Components
import NavBar from "../../Components/Heading/NavBar.jsx";
import OutputData from "../../Components/GetData/GetWeather/OutputWeatherData";
import SwitchUnitsBtn from "../../Components/Buttons/SwitchUnits";

//Content
import weatherContent from "../../Content/Weather";

//CSS
import positionConent from "../../CSS/PostionContent/Weather.module.css";

function Weather() {
  const { state } = useLocation();
  const { title } = state; // Read values passed on state

  //button is oppioste of what it is.
  //So the data is in metric but the button says change to imperial
  //when isMetric is true.
  const [isMetric, setIsMetric] = useState(true);
  const [unit, setUnit] = useState("Imperial");

  function handleClick() {
    isMetric ? setIsMetric(false) : setIsMetric(true);
    isMetric ? setUnit("Metric") : setUnit("Imperial");
  }

  return (
    <div>
      <NavBar title={title} />
      <SwitchUnitsBtn handleClick={handleClick} unit={unit} />

      <div className={positionConent.grid}>
        {weatherContent.map((data, index) => (
          <OutputData
            key={index}
            site={data.site}
            lat={data.lat}
            lon={data.lon}
            unit={unit}
            getNewData={isMetric}
          />
        ))}
      </div>
    </div>
  );
}
export default Weather;
