const categoriesRepository = require("../repositories/categories");

exports.getAll = () => categoriesRepository.getAll();
exports.getById = (id) => categoriesRepository.getById(id);
exports.create = (name, image, description) =>
  categoriesRepository.create(name, image, description);
exports.update = (id, name, image, description) => {
  categoriesRepository.update(id, name, image, description);
};
exports.destroy = (id) => categoriesRepository.delete(id);
