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
          "http://openweathermap.org/img/wn/" +
          response.data.current.weather[0].icon +
          "@2x.png",
        temp: response.data.current.temp,
        main: response.data.current.weather[0].main,
        description: response.data.current.weather[0].description,
        visibility: response.data.current.visibility, //in meters
        windSpeed: response.data.current.wind_speed,
        windDeg: response.data.current.wind_deg,
        perHour: response.data.hourly,
        perHoure: {
          description: response.data.hourly[1].weather[0].description,
          main: response.data.hourly[1].weather[0].main,
          time: response.data.hourly[1].dt,
          temp: response.data.hourly[1].temp,
          visibility: response.data.hourly[1].visibility, //in meters
          windSpeed: response.data.hourly[1].wind_speed,
          windDeg: response.data.hourly[1].wind_deg,
        },
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default GetData;
