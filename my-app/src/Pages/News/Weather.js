import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import OutputData from "../../Components/GetData/GetWeather/OutputWeatherData";

function Weather() {
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  let toggleUnit = true;

  function changeUnits() {
    toggleUnit = toggleUnit ? false : true;
  }

  return (
    <div>
      <HeadingGroup title={title} />
      <button onClick={changeUnits}>Switch to units</button>
      <OutputData
        city="St Louis"
        lat="38.6270"
        lon="-90.1994"
        unit={toggleUnit}
      />
    </div>
  );
}
export default Weather;
