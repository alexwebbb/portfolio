const Koa = require("koa"),
  app = new Koa(),
  favicon = require('koa-favicon'),
  helmet = require("koa-helmet"),
  compress = require("koa-compress"),
  views = require("koa-views"),
  json = require("koa-json"),
  onerror = require("koa-onerror"),
  bodyparser = require("koa-bodyparser"),
  logger = require("koa-logger"),
  // routes
  home = require("./routes/home"),
  about = require("./routes/about"),
  contact = require("./routes/contact");

// error handler
onerror(app);

// middlewares
app.use(helmet());
app.use(compress());
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
  );
  app.use(json());
  app.use(logger());
  app.use(require("koa-static")(__dirname + "/public"));
  app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(home.routes(), home.allowedMethods());
app.use(about.routes(), about.allowedMethods());
app.use(contact.routes(), contact.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
