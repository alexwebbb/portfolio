const router = require("koa-router")(),
  { index } = require("../controllers/homeController");

router.get("/", index);

module.exports = router;
