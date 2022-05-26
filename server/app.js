const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const forecast = process.env.WEATHER_API;

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
