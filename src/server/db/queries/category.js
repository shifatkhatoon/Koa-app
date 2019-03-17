const bcrypt = require('bcryptjs');
const knex = require('../connection');

function getAllCategory() {
  return knex('category')
  .select('*');
}

function getSingleCategory(id) {
	return knex('category')
	.select('*')
	.where({ id: parseInt(id) });
}

function addCategory(category) {
	return knex('category')
	.insert(category)
	.returning('*');
}

function updateCategory(id, category) {
	return knex('category')
    .update(category)
    .where({ id: parseInt(id) })
    .returning('*');
}

module.exports = {
	getAllCategory,
	getSingleCategory,
	addCategory,
	updateCategory,
}