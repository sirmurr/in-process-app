/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('member_task_assignment').del()
  await knex('member_task_assignment').insert([
    {id: 1, idMember: 1, idTask: 1, isComplete: false},
    // Add more entries as needed
  ]);
};
