exports.up = function(knex) {
  return knex.schema.createTable('member_task_assignment', table => {
    table.increments('id').primary();
    table.integer('idMember').unsigned().references('id').inTable('user_account');
    table.integer('idTask').unsigned().references('id').inTable('in_processing_task');
    table.boolean('isComplete');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('member_task_assignment');
};
