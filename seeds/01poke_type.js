/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries and resets sequences
  await knex('poke').del();  // Ensure this is deleted first due to foreign key constraints
  await knex.raw('TRUNCATE TABLE poke_type RESTART IDENTITY CASCADE');
  await knex('poke_type').insert([
    {id: 1, name: 'Grass'},
    {id: 2, name: 'Water'},
    {id: 3, name: 'Fire'},
    {id: 4, name: 'Electric'}
  ]);
};
