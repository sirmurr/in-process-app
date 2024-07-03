exports.up = function(knex) {
  return knex.schema.createTable('user_account', table => {
    table.increments('id').primary();
    table.boolean('isNewMember');
    table.boolean('isAppAdmin');
    table.boolean('isTaskAdmin');
    table.boolean('isLeadership');
    table.string('member_name');
    table.string('member_email');
    table.boolean('isInProcessed');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_account');
};
