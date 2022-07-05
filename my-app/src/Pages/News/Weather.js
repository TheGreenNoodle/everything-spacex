//Components
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import OutputData from "../../Components/GetData/GetWeather/OutputWeatherData";
import Footer from "../../Components/Footer/Footer";
import SwitchUnitsBtn from "../../Components/Buttons/SwitchUnits";

function Weather() {
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

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
      <HeadingGroup title={title} />
      <SwitchUnitsBtn handleClick={handleClick} unit={unit} />
      <OutputData
        city="St Louis"
        lat="38.6270"
        lon="-90.1994"
        unit={unit}
        getNewData={isMetric}
      />
      //add launch sites
      <Footer />
    </div>
  );
}
export default Weather;
