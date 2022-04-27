// const { Category } = require("../models");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const categoriesService = require("../services/categories");
const { validationResult } = require("express-validator");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpCodesEnum.BAD_REQUEST)
      .json({ message: HttpCodesEnum.STATUS_BAD_REQUEST });
  }

  const { name, image, description } = req.body;

  try {
    const category = await categoriesService.create(name, image, description);
    res.status(HttpCodesEnum.CREATED).json(category);
  } catch (err) {
    return res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .json({ message: HttpCodesEnum.STATUS_SERVER_INTERNAL_ERROR });
  }
};
exports.deleteCategoryById = async (req, res, next) => {};
exports.updateCategoryById = async (req, res, next) => {};
