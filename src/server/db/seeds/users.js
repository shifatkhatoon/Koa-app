
exports.seed = (knex, Promise) => {
  return knex('user').del()
  .then(() => {
    return knex('user').insert({
      name: 'Admin',
      email: 'test@gmail.com',
      password: 'test'
    });
  })
};