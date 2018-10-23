const projects = require("./../../data/projectsData"),
link = require("./../../utils/link"),
imageBaseUrl = "https://res.cloudinary.com/execool/image/upload/",
responsiveQString = "w_auto,c_scale/",
githubString = "github.com/alexwebbb/";

exports.index = async (ctx, next) => {
  await ctx.render("contact", {
    title: "Contact",
    projects,
    link,
    imageBaseUrl,
    responsiveQString,
    githubString
  });
};
