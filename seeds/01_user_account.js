/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    {id: 1, isNewMember: true, isAppAdmin: false, isTaskAdmin: false, isLeadership: false, MemberName: 'John Doe', MemberEmail: 'john@example.com', isInProcessed: false},
    {id: 2, isNewMember: false, isAppAdmin: true, isTaskAdmin: false, isLeadership: false, MemberName: 'Jane Smith', MemberEmail: 'jane@example.com', isInProcessed: true},
    // Add more entries as needed
  ]);
};
