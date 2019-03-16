
exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert({
      name: 'Admin',
      email: 'test@gmail.com',
      password: 'test'
    });
  })
};