exports.index = async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!"
  });
};
