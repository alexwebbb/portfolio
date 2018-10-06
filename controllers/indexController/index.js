const projects = require("./projects"),
link = require("./link"),
imageBaseUrl = "https://res.cloudinary.com/execool/image/upload/",
responsiveQString = "w_auto,c_scale/";

exports.index = async (ctx, next) => {
  await ctx.render("index", {
    title: "Home Page of Alex Webb",
    projects,
    link,
    imageBaseUrl,
    responsiveQString
  });
};
