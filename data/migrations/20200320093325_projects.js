
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', function(tbl) {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description');
        tbl.string('completed');
    })
};

exports.down = function(knex) {
  
};
