const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js').development);

app.get('/', (request, response) => {
  response.send('Application up and running.');
});

app.get('/pokemons', (request, response) => {
  knex('poke')
    .select('*')
    .then(pokemons => {
      const pokemonNames = pokemons.map(pokemon => pokemon.name);
      response.json(pokemonNames);
    })
    .catch(err => {
      console.error(err);
      response.status(500).json({ error: 'Failed to fetch pokemons' });
    });
});

app.listen(port, () => {
  console.log('Your Knex and Express application are running successfully');
});
