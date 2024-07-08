/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('in_processing_task').del()
  await knex('in_processing_task').insert([
      {id: 1, TaskName: 'Dental Check', TaskDetails: 'Go see the unit dentist for cleaning', TaskAdmin: 1},
      {id: 2, TaskName: 'Fitness Assessment', TaskDetails: 'Complete your annual fitness test at the base gym', TaskAdmin: 1},
      {id: 3, TaskName: 'Uniform Inspection', TaskDetails: 'Ensure your uniform meets the required standards and present it for inspection', TaskAdmin: 1},
      {id: 4, TaskName: 'Security Briefing', TaskDetails: 'Attend the mandatory security briefing at the operations center', TaskAdmin: 2},
      {id: 5, TaskName: 'Weapon Qualification', TaskDetails: 'Complete your weapon qualification at the firing range', TaskAdmin: 1},
      {id: 6, TaskName: 'Medical Examination', TaskDetails: 'Undergo a comprehensive medical examination at the base clinic', TaskAdmin: 3},
      {id: 7, TaskName: 'Cybersecurity Training', TaskDetails: 'Participate in the annual cybersecurity training session', TaskAdmin: 2},
      {id: 8, TaskName: 'Emergency Drill', TaskDetails: 'Take part in the emergency evacuation drill', TaskAdmin: 1},
      {id: 9, TaskName: 'Vehicle Maintenance', TaskDetails: 'Ensure your assigned vehicle undergoes routine maintenance', TaskAdmin: 2},
      {id: 10, TaskName: 'Leadership Seminar', TaskDetails: 'Attend the leadership development seminar in the conference room', TaskAdmin: 3}
      // Add more entries as needed
    ]);
};
