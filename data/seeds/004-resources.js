const { isInteger } = require("lodash");

exports.seed = function(knex) {
  
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1,
         resource_name: 'hammer',
         resource_description: 'hammer and remove nails'}
      ]);
   
};
