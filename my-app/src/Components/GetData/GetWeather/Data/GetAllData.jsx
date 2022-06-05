import axios from "axios";
import { useEffect, useState } from "react";

function GetAllData({ setData, props }) {
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
        getCurrent: response.data.current,
        getHourly: response.data.hourly,
        getDaily: response.data.daily,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default GetAllData;
