// const { Category } = require("../models");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {};
exports.deleteCategoryById = async (req, res, next) => {
  try {

        const deletedCategory = await Category.destroy({ where: { id: req.params.id } });

        if (!deletedCategory) {
            return res.status(404).send('Category not found');
        };

        return res.sendStatus(204)

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

exports.updateCategoryById = async (req, res, next) => {};

