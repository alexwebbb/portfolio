const router = require("koa-router")(),
  { index } = require("../controllers/genericController")("Home");

router.get("/", index);

module.exports = router;
