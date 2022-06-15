import axios from "axios";
import { useEffect, useState } from "react";

function YoutubeData({ setData, props }) {
  const options = {
    method: "GET",
    url: "/api/youtube",
    params: {
      channelId: props.channelId,
    },
  };

  axios
    .request(options)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default YoutubeData;
