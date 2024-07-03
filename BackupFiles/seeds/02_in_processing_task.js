exports.seed = function(knex) {
  return knex('in_processing_task').del()
    .then(function () {
      return knex('in_processing_task').insert([
        { task_name: 'Dental Check', task_details: 'Visit the dentist for a checkup.', task_admin: 2 }
      ]);
    });
};
