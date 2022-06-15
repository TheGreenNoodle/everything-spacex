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

app.route("/api/youtube").get((req, res) => {
  const channelId = req.query.channelId;
  let uploads = null;

  axios
    .get(
      //Gets user uploads playlist ID
      "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=" +
        channelId +
        "&key=" +
        youtube
    )
    .then((response) => {
      uploads = response.data.items[0].contentDetails.relatedPlaylists.uploads;

      return axios.get(
        //Grabs the playlist id data using the uploads id
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=" +
          uploads +
          "&key=" +
          youtube
      );
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.error(error));
});

//remove when done
app.route("/api/weather/example").get((req, res) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=38.6270&lon=-90.1994&units=imperial&exclude=minutely,alerts&appid=" +
        forecast
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

app.route("/api/youtube/example").get((req, res) => {
  const channelId = "UC1XvxnHFtWruS9egyFasP1Q";
  let uploads = null;

  //Gets user uploads playlist ID
  axios
    .get(
      "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=" +
        channelId +
        "&key=" +
        youtube
    )
    .then((response) => {
      uploads = response.data.items[0].contentDetails.relatedPlaylists.uploads;
      //Grabs the playlist id data using the uploads id
      return axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=" +
          uploads +
          "&key=" +
          youtube
      );
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.error(error));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
