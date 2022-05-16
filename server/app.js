const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.route("/api").get((req, res) => {
  res.json({ message: "Hi" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
