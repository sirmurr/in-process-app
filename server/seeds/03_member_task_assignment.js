/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('member_task_assignment').del()
  await knex('member_task_assignment').insert([
      {id: 1, idMember: 1, idTask: 1, isComplete: false},
      {id: 2, idMember: 2, idTask: 2, isComplete: false},
      {id: 3, idMember: 3, idTask: 3, isComplete: false},
      {id: 4, idMember: 4, idTask: 4, isComplete: false},
      {id: 5, idMember: 5, idTask: 5, isComplete: false},
      {id: 6, idMember: 6, idTask: 6, isComplete: false}
      // {id: 7, idMember: 7, idTask: 7, isComplete: false},
      // {id: 8, idMember: 8, idTask: 8, isComplete: false},
      // {id: 9, idMember: 9, idTask: 9, isComplete: false},
      // {id: 10, idMember: 10, idTask: 10, isComplete: false},
      // {id: 11, idMember: 11, idTask: 11, isComplete: false},
      // {id: 12, idMember: 12, idTask: 1, isComplete: false}
      // Add more entries as needed
    ]);
};
