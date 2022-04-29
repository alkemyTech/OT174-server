const { News } = require("../models");

module.exports = {
  getById: (id) => News.findByPk(id),
  update: (id, name, content, image, categoryId) =>
    News.update({ name, content, image, categoryId }, { where: { id } }),
};
