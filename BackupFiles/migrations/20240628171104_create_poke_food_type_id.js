/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('poke', table => {
    table.integer('poke_food_type_id');
    table.foreign('poke_food_type_id').references('poke_food_type.id').deferrable('deferred');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('poke', table =>{
    table.dropForeign('poke_food_type_id');
    table.dropColumn('poke_food_type_id');
  })
};
