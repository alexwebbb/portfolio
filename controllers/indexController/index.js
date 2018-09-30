const projects = require("./projects"),
link = require("./link");

exports.index = async (ctx, next) => {
  await ctx.render("index", {
    title: "Home Page of Alex Webb",
    projects,
    link
  });
};
