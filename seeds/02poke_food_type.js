/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('poke_food_type').del()
  await knex('poke_food_type').insert([
    {id: 1, name: 'Poke Feed', description: 'dry, tasty, and easy to transport small bits of food. Perfect for on the go.'},
    {id: 2, name: 'Rare Candy', description: 'potent candy that makes a pokemon stronger at a quick pace'},
    {id: 3, name: 'Fruits/Veggies', description: 'random assortment of fruits and vegtables depending on season and poke preference'}
  ]);
};
