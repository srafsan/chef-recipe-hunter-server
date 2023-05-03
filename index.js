const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chefDetails = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chefDetails);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;

  const selectedChef = chefDetails.find((n) => n.chef_id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
