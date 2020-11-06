
exports.seed = function(knex) {
  
  
      return knex('projects').insert([
        { p_name: 'Bird House',
         p_description: 'Small house for birds.',
        completed: 0,
        p_id:  1}
      ]);
    };

