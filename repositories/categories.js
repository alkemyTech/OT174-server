const { Category } = require("../models");

module.exports = {
  getAll: () => Category.findAll(),
  getById: (id) => Category.findByPk(id),
  create: (name, image, description) =>
    Category.create(name, image, description),
  update: (id, name, image, description) =>
    Category.update({ name, image, description }, { where: { id } }),
  delete: (id) => Category.destroy({ where: { id } }),
};
