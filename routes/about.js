const router = require("koa-router")(),
{ index } = require("../controllers/aboutController");

router.prefix("/about");

router.get("/", index);


module.exports = router;
