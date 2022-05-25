import axios from "axios";

function GetMap(props) {
  const options = {
    method: "GET",
    url: "api/weather/map/example",
    parms: {
      lat: props.lat,
      lon: props.lon,
      zoom: props.zoom,
      layer: props.layer,
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
  });
}

export default GetMap;
