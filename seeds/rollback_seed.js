exports.seed = async function (knex) {
  // Deletes ALL existing entries from poke-related tables
  await knex('poke').del();
  await knex('poke_type').del();
  await knex('poke_food_type').del();
  //await knex('poke_data_population').del();

  // If you want to truncate the tables (reset primary keys), use:
  // await knex.raw('TRUNCATE TABLE poke RESTART IDENTITY CASCADE');
  // await knex.raw('TRUNCATE TABLE poke_type RESTART IDENTITY CASCADE');
  // await knex.raw('TRUNCATE TABLE poke_food_type RESTART IDENTITY CASCADE');
  // await knex.raw('TRUNCATE TABLE poke_data_population RESTART IDENTITY CASCADE');
};
