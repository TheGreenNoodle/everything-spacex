import axios from "axios";
import { useState } from "react";

function GetYoutubeProfile() {
  const [data, setData] = useState({});
  const options = {
    method: "GET",
    url: "/api/youtube",
    params: {},
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export default GetYoutubeProfile;
