const bcrypt = require('bcryptjs');
const knex = require('../connection');

function getSingleUser(id) {
  return knex('user')
  .select('*')
  .where({ id: parseInt(id) });
}

function getRegisteredUser(email) {
  return knex('user')
  .select('password')
  .where({ email: email });
}

module.exports = {
  getSingleUser,
  getRegisteredUser,
};