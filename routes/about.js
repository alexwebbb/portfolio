const router = require("koa-router")(),
  { index } = require("../controllers/genericController")("About");

router.prefix("/about");

router.get("/", index);

module.exports = router;
