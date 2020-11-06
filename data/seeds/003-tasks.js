const { isInteger } = require("lodash");

exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          id: 1,
          t_description: 'cut lumber',
          t_notes: 'sand lumber before build',
          t_completed: 0,
          project_id: 1
        }
      ]);
    
};
