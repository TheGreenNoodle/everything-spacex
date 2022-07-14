import axios from "axios";

function YoutubeData({ setProfileData, setGotData, props }) {
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
      //Has at least a 1 second loading screen
      setTimeout(() => {
        setProfileData(response.data.items);
        setGotData(true);
      }, 1000);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default YoutubeData;
