const { News } = require("../models");

module.exports = {
  getById: async (id) => News.findByPk(id),
  update: async (id, name, content, image, categoryId) =>
    News.update({ name, content, image, categoryId }, { where: { id } }),
};
