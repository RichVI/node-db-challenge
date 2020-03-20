exports.up = function(knex) {
	return knex.schema
		.createTable('projects', function(tbl) {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl.string('description');
			tbl.string('completed');
		})
		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl.string('description', 556).notNullable();
			tbl.string('notes');
			tbl.string('completed');
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('resources', (tbl) => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl.string('description');
			tbl
				.integer('project_id')
				.unsigned()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
    	.dropTableIfExists('projects')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources');
};
