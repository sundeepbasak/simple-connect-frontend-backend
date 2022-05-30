const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api", (req, res) => {
  res.json({ "users": ["Bruce Wayne", "Wanda Maximoff", "Tony Stark"] });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
