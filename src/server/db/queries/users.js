const bcrypt = require('bcryptjs');
const knex = require('../connection');

function getSingleUser(id) {
  return knex('users')
  .select('*')
  .where({ id: parseInt(id) });
}

function getRegisteredUser(email) {
  return knex('users')
  .select('password')
  .where({ email: email });
}

module.exports = {
  getSingleUser,
  getRegisteredUser,
};