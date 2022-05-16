const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.route("/api").get((req, res) => {
  res.json({ message: "Hi" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
