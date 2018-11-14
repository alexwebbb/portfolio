const projects = require("./../../data/projectsData"),
link = require("./../../utils/link"),
selfPortraitUrl = "v1542177526/self_portrait.jpg",
imageBaseUrl = "https://res.cloudinary.com/execool/image/upload/",
responsiveQString = "w_auto,c_scale/",
githubString = "github.com/alexwebbb/";

module.exports = function (target) {
  
  let module = {};

  module.index = async (ctx, next) => {
    await ctx.render(target, {
      title: target,
      projects,
      link,
      selfPortraitUrl,
      imageBaseUrl,
      responsiveQString,
      githubString
    });
  };

  return module;
}
