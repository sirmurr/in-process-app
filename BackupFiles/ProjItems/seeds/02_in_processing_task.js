/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('in_processing_task').del()
  await knex('in_processing_task').insert([
    {id: 1, TaskName: 'Dental Check', TaskDetails: 'Go see the unit dentist for cleaning', TaskAdmin: 1},
    // Add more entries as needed
  ]);
};
