exports.index = async (ctx, next) => {
  await ctx.render("index", {
    title: "Home Page of Alex Webb"
  });
};
