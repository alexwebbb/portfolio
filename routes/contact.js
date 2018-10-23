const router = require("koa-router")(),
{ index } = require("../controllers/contactController");

router.prefix("/contact");

router.get("/", index);


module.exports = router;
