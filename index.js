const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chefDetails = require("./data/chef.json");
const popularFoods = require("./data/popular.json");

app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Chef api
app.get("/chef", (req, res) => {
  res.send(chefDetails);
});

// individual chef api
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;

  const selectedChef = chefDetails.find((n) => n.chef_id == id);
  res.send(selectedChef);
});

// popular foods api
app.get("/popular-foods", (req, res) => {
  res.send(popularFoods);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
