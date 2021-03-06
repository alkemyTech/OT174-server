const { Category } = require("../models");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({
      where: id,
    });

    if (!category) {
      return res.status(HttpCodesEnum.NOT_FOUND).send("Category not found");
    }

    return res.json({ Category: category });
  } catch (err) {
    return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({ message: err.message });
  }
};
exports.createCategory = async (req, res, next) => {};
exports.deleteCategoryById = async (req, res, next) => {};
exports.updateCategoryById = async (req, res, next) => {};
