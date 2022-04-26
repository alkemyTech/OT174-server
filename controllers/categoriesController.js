// const { Category } = require("../models");

exports.getAllCategories = async (req, res, next) => {};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {};
exports.deleteCategoryById = async (req, res, next) => {};
















exports.updateCategoryById = async (req, res, next) => {

  try {

        const categoryToUpdate = await Category.findOne({ where: { id: req.params.id } });

        if (!categoryToUpdate) {
            return res.status(404).send('Category not found');
        }

        await categoryToUpdate.set(req.body);

        const updatedCategory = await categoryToUpdate.save();

        return res.status(201).json(updatedCategory)

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
  
};
