import axios from "axios";

function YoutubeData({ setData, setDataRecived, props }) {
  const options = {
    method: "GET",
    url: "/api/youtube",
    params: {
      channelId: props.channelId,
      videosToGet: props.videosToGet,
    },
  };

  axios
    .request(options)
    .then((response) => {
      //Has at least a 1 second loading screen
      setTimeout(() => {
        setData(response.data.items);
        setDataRecived(true);
      }, 1000);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default YoutubeData;
