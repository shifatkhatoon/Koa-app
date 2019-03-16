
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_type', (table) => {
    table.increments();
    table.string('type').notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_type');
};
