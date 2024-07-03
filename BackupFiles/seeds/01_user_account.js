exports.seed = function(knex) {
  return knex('user_account').del()
    .then(function () {
      return knex('user_account').insert([
        { isNewMember: true, isAppAdmin: false, isTaskAdmin: false, isLeadership: false, member_name: 'John Doe', member_email: 'john@example.com', isInProcessed: false },
        { isNewMember: false, isAppAdmin: true, isTaskAdmin: false, isLeadership: false, member_name: 'Admin User', member_email: 'admin@example.com', isInProcessed: true }
      ]);
    });
};
