const router = require("koa-router")(),
  { index } = require("../controllers/genericController")("Contact");

router.prefix("/contact");

router.get("/", index);

module.exports = router;
