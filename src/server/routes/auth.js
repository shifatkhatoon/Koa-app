const Router = require('koa-router');
const passport = require('koa-passport');
const fs = require('fs');

const queries = require('../db/queries/users');
const helpers = require('./_helpers');

const router = new Router();


router.get('/admin', async (ctx) => {
  if (!helpers.ensureAuthenticated(ctx)) {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('./src/server/views/login.html');
  } else {
    ctx.status = 404;
    ctx.body = { status: 'error' };
  }
});

router.post('/auth/login', async (ctx) => {
  return passport.authenticate('local', (err, user, info, status) => {
    if (user) {
      ctx.login(user);
    } else {
      ctx.status = 400;
      ctx.body = { status: 'error' };
    }
  })(ctx);
});

module.exports = router;