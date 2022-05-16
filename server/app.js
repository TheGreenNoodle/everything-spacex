const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const forecast = process.env.WEATHER_API;

const app = express();

app.use(cors());

app.route("/api").get((req, res) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=" +
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
