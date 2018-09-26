const router = require("koa-router")(),
  { index } = require("../controllers/indexController");

router.get("/", index);

module.exports = router;
