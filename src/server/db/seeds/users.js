const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('88776655443322', salt);
    return Promise.join(
      knex('users').insert({
        email: 'test@gmail.com',
        password: test,
        admin: true
      })
    );
  });
};