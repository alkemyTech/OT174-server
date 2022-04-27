const { Category } = require("../models/Category");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

const getCategoryById = async (req, res, next) => {
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

module.exports = {
  getCategoryById,
};
