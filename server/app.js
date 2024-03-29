const path = require("path");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const forecast = process.env.WEATHER_API;
const youtube = process.env.YOUTUBE_API;

const app = express();
const fs = require("fs");

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../my-app/build")));

//Data from openweathermap
app.route("/api/weather").get((req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const unit = req.query.unit;

  axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=" +
        unit +
        "&exclude=minutely,alerts" +
        "&appid=" +
        forecast
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

//data from Youtube Data Api V3
app.route("/api/youtube").get((req, res) => {
  const channelId = req.query.channelId;
  const videosToGet = req.query.videosToGet;
  let playlistId = null;

  axios
    .get(
      //Gets user uploads playlist ID
      "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=" +
        channelId +
        "&key=" +
        youtube
    )
    .then((response) => {
      playlistId =
        response.data.items[0].contentDetails.relatedPlaylists.uploads;

      return axios.get(
        //Grabs the playlist id data using the uploads id
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=" +
          videosToGet +
          "&playlistId=" +
          playlistId +
          "&key=" +
          youtube
      );
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.error(error));
});

//sends back the react frontend
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../my-app/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
