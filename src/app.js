const express = require('express');
const knex = require('knex')(require('../knexfile.js').development);

const app = express();
const port = 8081;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application up and running.');
});

app.get('/inprocesss', (req, res) => {
  knex('user_account')
    .select('*')
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log('Your Knex and Express application are running successfully');
});

module.exports = app;