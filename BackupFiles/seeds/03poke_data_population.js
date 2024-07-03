/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('poke').del()
  await knex('poke').insert([
    {id: 1, name: 'Bulbasaur', poke_type_id: 1, poke_food_type_id: 1},
    {id: 2, name: 'Squirtle', poke_type_id: 2, poke_food_type_id: 2},
    {id: 3, name: 'Charmander',poke_type_id: 3, poke_food_type_id: 3},
    {id: 4, name: 'Pikachu',poke_type_id: 4, poke_food_type_id: 3}
  ]);
};
