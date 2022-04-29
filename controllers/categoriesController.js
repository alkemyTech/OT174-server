// const { Category } = require("../models");
// const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const categoriesService = require("../services/categories");
const { validateRequest } = require("../util/validateReq");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {
  validateRequest(req, res);
  const { name, image, description } = req.body;
  categoriesService.create(res, name, image, description);
};
exports.deleteCategoryById = async (req, res, next) => {};
exports.updateCategoryById = async (req, res, next) => {};
