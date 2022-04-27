// const { Category } = require("../models");
const { HttpCodesEnum } = require('../enums/httpCodesEnum');

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {};
exports.deleteCategoryById = async (req, res, next) => {
  try {

        const category = await Category.findOne({ where: { id: req.params.id } });

        if (!category) {
            return res.status(HttpCodesEnum.NOT_FOUND).send('Category not found');
        };

        await category.destroy();

        return res.sendStatus(HttpCodesEnum.DELETED)

    } catch (err) {
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({ message: err.message });
    }
};

exports.updateCategoryById = async (req, res, next) => {};

