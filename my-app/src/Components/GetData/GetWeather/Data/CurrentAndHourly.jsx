import unixToTime from "../Functions/unixToTime";

//Components
import GetCurrent from "./GetCurrent";
import Carousel from "react-multi-carousel";

//CSS
import "react-multi-carousel/lib/styles.css";
import weatherCards from "../../../../CSS/Weather/weatherCards.module.css";

function CurrentAndHourly(props) {
  const hourly = props.getHourly;

  //Put in css file later
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        minimumTouchDrag={1}
        arrows={false}
        className={weatherCards.carousel}
        responsive={responsive}
      >
        <div>
          <GetCurrent data={props.getCurrent} unit={props.unit} />
        </div>

        {hourly.slice(1, props.numToGet + 1).map((data, index) => (
          <div key={index} className={weatherCards.box}>
            <h2 className={weatherCards.forecastDiv}>{unixToTime(data.dt)}</h2>

            <hr className={weatherCards.line} />

            <div className={weatherCards.iconGroup}>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.weather[0].icon +
                  "@2x.png"
                }
                alt="weather-icon"
              />

              <p>{data.temp}</p>
              <p>{data.weather[0].main}</p>
            </div>

            <hr className={weatherCards.line} />
            <h4>Visibility</h4>
            <p>{data.visibility} m</p>

            <hr className={weatherCards.line} />

            <h4>Wind</h4>
            <p>{data.wind_speed}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CurrentAndHourly;
