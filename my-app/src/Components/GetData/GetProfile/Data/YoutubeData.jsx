import axios from "axios";
import { useEffect, useState } from "react";

function YoutubeData({ setProfileData, props }) {
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
      setProfileData(response.data.items);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default YoutubeData;
