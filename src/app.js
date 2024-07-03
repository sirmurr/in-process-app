const express = require("express");
const knex = require("knex")(require("../knexfile.js").development);

const app = express();
const port = 8081;

app.get("/", (request, respond) => {
  respond.send("Application up and running.");
});

app.listen(port, () => {
  console.log("Your Knex and Express application are running successfully");
});

app.get("/inprocesss", (request, response) => {
  knex("inprocess")
    .select("*")
    .then((inprocesss) => {
      var inprocessNames = inprocesss.map((inprocess) => inprocess.name);
      response.json(inprocessNames);
    });
});
