const { News } = require("../models");

module.exports = {
  create: (name, content, image, categoryId) =>
    News.create(name, content, image, categoryId),
};
