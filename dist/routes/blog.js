"use strict";

var _controller = require("../controller/blog");

const router = require('koa-router')();

router.prefix('/blogs');
router.get('/', (ctx, next) => {
  ctx.body = 'Blog Main Pages';
});
router.get('/list', (ctx, next) => {
  ctx.body = 'Blog List Page';
});
router.get('/detail', (ctx, next) => {
  ctx.body = 'Blog Detail Page';
});
router.post('/add', (ctx, next) => {
  console.log(ctx.request.body);
  (0, _controller.addBlog)(ctx.request.body);
  ctx.body = 'I want add an article to blog list!';
});
router.post('/delete', (ctx, next) => {
  ctx.body = 'I want delete an article to blog list!';
});
router.post('/update', (ctx, next) => {
  ctx.body = 'I want update an article to blog list!';
});
module.exports = router;