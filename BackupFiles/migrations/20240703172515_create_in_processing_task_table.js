exports.up = function(knex) {
  return knex.schema.createTable('in_processing_task', table => {
    table.increments('id').primary();
    table.string('task_name');
    table.string('task_details');
    table.integer('task_admin').unsigned().references('id').inTable('user_account');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('in_processing_task');
};
