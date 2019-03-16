const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

exports.DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/koa-skeleton'


const app = new Koa();
const PORT = process.env.PORT || 3000;

// body parser
app.use(bodyParser());

// authentication
require('./auth');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(indexRoutes.routes());
app.use(authRoutes.routes());


// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;