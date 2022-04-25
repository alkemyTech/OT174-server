const { Category } = require("../models/Category");

const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryFound = await Category.findOne({
      where: id,
    });

    if (!categoryFound) {
      return res.status(404).send("Category not found");
    }

    return res.json({ Category: categoryFound });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCategoryById,
};
