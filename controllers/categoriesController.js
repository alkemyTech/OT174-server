const { Category } = require("../models/index");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {
  const { name, description, image } = req.body;

  try {
    const [row, created] = await Category.findOrCreate({
      where: { name },
      defaults: { name, description, image },
    });

    if (created) {
      res
        .status(HttpCodesEnum.CREATED)
        .json({ message: HttpCodesEnum.STATUS_CREATED });
    } else {
      //category already exists
      res
        .status(HttpCodesEnum.BAD_REQUEST)
        .json({ message: HttpCodesEnum.STATUS_BAD_REQUEST });
    }
  } catch (err) {
    res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .json({ message: HttpCodesEnum.STATUS_SERVER_INTERNAL_ERROR });
  }
};

exports.deleteCategoryById = async (req, res, next) => {};
exports.updateCategoryById = async (req, res, next) => {};
