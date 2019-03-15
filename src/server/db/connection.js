const environment = process.env.NODE_ENV || 'development';
const config = require('../../../index.js')[environment];

module.exports = require('knex')(config);