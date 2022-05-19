// Components
import axios from "axios";
import { useEffect, useState } from "react";

function GetWeather(props) {
  const [data, setData] = useState();

  useEffect(() => {
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
        setData({ temp: response.data.current.temp });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const icon = data.current.weather[0].icon;
  // const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  const imgUrl =
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent.fortune.com%2Fwp-content%2Fuploads%2F2020%2F08%2FGettyImages-1219672105_web.jpg&imgrefurl=https%3A%2F%2Ffortune.com%2Fcompany%2Fspacex%2F&tbnid=X4lIh7GUJ-iAcM&vet=12ahUKEwiNm5H2xOf3AhWbAs0KHcN2BGwQMygAegUIARC8AQ..i&docid=m3gOZlO-lchSaM&w=2880&h=1920&q=space%20x&ved=2ahUKEwiNm5H2xOf3AhWbAs0KHcN2BGwQMygAegUIARC8AQ";
  console.log(data);
  return (
    <div>
      {!data ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>{data.temp}</p>
          <h1>{props.city}</h1>
          <div>Weather map</div>
          <h1>Todays forecast</h1>
          <p>Weather icon Todays forcast</p>
          <h1>7 day forecast</h1>
        </div>
      )}
    </div>
  );
}

export default GetWeather;
