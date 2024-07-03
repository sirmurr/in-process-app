exports.seed = function(knex) {
  return knex('member_task_assignment').del()
    .then(function () {
      return knex('member_task_assignment').insert([
        { idMember: 1, idTask: 1, isComplete: false }
      ]);
    });
};
