
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('image').notNullable();
    table.string('description').notNullable();
    table.integer('status').notNullable();
    table.integer('level').notNullable();
    table.integer('parent_id').references('category.id');
    table.integer('user_id').references('user.id');
    table.string('tags');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('category');
};
