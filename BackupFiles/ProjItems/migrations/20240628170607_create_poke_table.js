/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('poke', table => {
    table.increments();
    table.string('name', 250);
    table.integer('poke_type_id');
    table.foreign('poke_type_id').references(`poke_type.id`);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('poke', table => {
    table.dropForeign('poke_type_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('poke');
  });
};
