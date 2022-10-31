import axios from "axios";

function WeatherData({ setData, setDataRecived, props }) {
  const options = {
    method: "GET",
    url: "/api/weather",
    params: {
      lat: props.lat,
      lon: props.lon,
      unit: props.unit,
    },
  };

  axios
    .request(options)
    .then((response) => {
      setTimeout(() => {
        setData({
          getCurrent: response.data.current,
          getHourly: response.data.hourly,
          getDaily: response.data.daily,
        });
        setDataRecived(true);
      }, 1000);
    })

    .catch((error) => {
      console.error(error);
    });
}

export default WeatherData;
