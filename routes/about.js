const router = require("koa-router")(),
{ index } = require("../controllers/aboutController");

router.prefix("/about");

router.get("/", index);

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

module.exports = router;
