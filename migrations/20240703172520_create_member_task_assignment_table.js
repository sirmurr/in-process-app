/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('member_task_assignment', table => {
    table.increments('id').primary();
    table.integer('idMember').references('id').inTable('user_account');
    table.integer('idTask').references('id').inTable('in_processing_task');
    table.boolean('isComplete');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('member_task_assignment');
};
