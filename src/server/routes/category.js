const Router = require('koa-router');
const passport = require('koa-passport');
const fs = require('fs');
const queries = require('../db/queries/category');

const router = new Router();
const BASE_URL = `/api/v1/category`;


router.get(BASE_URL, async (ctx) => {
	try {
    const categories = await queries.getAllCategory();
    ctx.body = {
      status: 'success',
      data: categories
    };
  } catch (err) {
    console.log(err)
  }
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const category = await queries.getSingleCategory(ctx.params.id);
    if (category.length) {
        ctx.body = {
	        status: 'success',
	        data: category
	    };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That category does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const category = await queries.addCategory(ctx.request.body);
    if (category.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: category
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const category = await queries.updateCategory(ctx.params.id, ctx.request.body);
    if (category.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: category
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That category does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


module.exports = router;