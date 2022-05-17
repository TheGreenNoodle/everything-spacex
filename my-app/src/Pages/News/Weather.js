import { useLocation } from "react-router";
// Custom Components
import HeadingGroup from "../../Components/Heading/HeadingGroup.jsx";
import GetWeather from "../../Components/GetData/GetWeather";
function Weather() {
  const { state } = useLocation();
  const { title, text, vidUrl } = state; // Read values passed on state

  return (
    <div>
      <HeadingGroup title={title} />
      <GetWeather
        city="St Louis"
        lat="38.6270"
        lon="-90.1994"
        unit="imperial"
      />
    </div>
  );
}
export default Weather;
