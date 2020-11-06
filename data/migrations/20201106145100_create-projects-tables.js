exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments()
          tbl.string('p_name', 128).notNullable()
          tbl.string('p_description', 128).notNullable()
          tbl.integer('p_id')
          tbl.boolean('completed')
          .notNullable()
          .defaultTo(false)
      })

      .createTable('tasks', tbl => {
          tbl.increments()
          tbl.string('t_description', 128).notNullable()
          tbl.string('t_notes', 500)
          tbl.boolean('t_completed')
          .notNullable()
          .defaultTo(false)
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      } )

      .createTable('resources', tbl => {
          tbl.increments()
          tbl.string('resource_name', 128).notNullable()
          tbl.string('resource_description', 100)
      })

      .createTable('task_resources', tbl => {
          tbl.increments()
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
          tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('task_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
  };