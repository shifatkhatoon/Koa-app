const queries = require('../db/queries/users');

function ensureAuthenticated(context) {
  return context.isAuthenticated();
}

function ensureAdmin(cred) {
  return new Promise((resolve, reject) => {
    if (cred) {
      queries.getRegisteredUser(cred.email)
      .then((user) => {
        if (user && user[0]) {
          resolve(true);
        }
      })
      .catch((err) => { reject(false); });
    }
    return false;
  });
}


module.exports = {
  ensureAuthenticated,
  ensureAdmin
};