import axios from "axios";
import { useEffect, useState } from "react";

function GetData({ setData, props }) {
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
      setData({
        location: [response.data.lat, response.data.lon],
        icon:
          "https://openweathermap.org/img/wn/" +
          response.data.current.weather[0].icon +
          "@2x.png",
        temp: response.data.current.temp,
        main: response.data.current.weather[0].main,
        description: response.data.current.weather[0].description,
        visibility: response.data.current.visibility, //in meters
        windSpeed: response.data.current.wind_speed,
        windDeg: response.data.current.wind_deg,
        currentWeather: response.data.current,
        perHour: response.data.hourly,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default GetData;
