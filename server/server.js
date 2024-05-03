const dishes = require("./dishes.js");
const restaurants = require("./restaurants.js");
const express = require("express");
const cors = require("cors");

const app = express();
app.use("/images", express.static("public/images"));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7777;

app.get("/dishes", (req, res) => {
  res.json(dishes);
});

app.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
