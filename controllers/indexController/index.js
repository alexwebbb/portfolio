const projects = require("./projectsData"),
link = require("./link"),
imageBaseUrl = "https://res.cloudinary.com/execool/image/upload/",
responsiveQString = "w_auto,c_scale/",
githubString = "github.com/alexwebbb/";

exports.index = async (ctx, next) => {
  await ctx.render("index", {
    title: "Home Page of Alex Webb",
    projects,
    link,
    imageBaseUrl,
    responsiveQString,
    githubString
  });
};
