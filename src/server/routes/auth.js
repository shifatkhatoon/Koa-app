const Router = require('koa-router');
const passport = require('koa-passport');
const fs = require('fs');

const queries = require('../db/queries/users');
const helpers = require('./_helpers');

const router = new Router();


router.get('/login', async (ctx) => {
  if (!helpers.ensureAuthenticated(ctx)) {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('views/login.html');
  } else {
    ctx.status = 404;
    ctx.body = { status: 'error' };
  }
});

router.post('/login', async (ctx) => {
  return passport.authenticate('local', (err, user, info, status) => {
    let cred = ctx.request.body;
    helpers.ensureAdmin(cred)
    .then((user) => {
      if(user) {
        ctx.login(user);
        console.log("in post call", user)
        ctx.redirect('/dashboard');
      }
    })
    .catch((err) => { console.log(err); });
  })(ctx);
});

router.get('/dashboard', async (ctx) => {
  console.log("in dashboard")
  if (!helpers.ensureAuthenticated(ctx)) {
    console.log("in if of dashboard");
    ctx.type = 'html';
    ctx.body = fs.createReadStream('views/dashboard.html');
  } else {
    ctx.status = 404;
    ctx.body = { status: 'error' };
  }
});

module.exports = router;