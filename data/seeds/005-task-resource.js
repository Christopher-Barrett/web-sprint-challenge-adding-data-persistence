const { isInteger } = require("lodash");

exports.seed = function(knex) {
  
   
      // Inserts seed entries
      return knex('task_resources').insert([
        { id: 1,
        project_id: 1,
        resource_id: 1}
      ]);
    
};
