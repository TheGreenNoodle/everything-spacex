import axios from "axios";

function GetYoutubeProfile() {
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
}

export default GetYoutubeProfile;
