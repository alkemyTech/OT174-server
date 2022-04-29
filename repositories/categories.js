const { Category } = require("../models");

module.exports = {
  getById: (id) => Category.findByPk(id),
  create: (name, image, description) =>
    Category.create(name, image, description),
};
