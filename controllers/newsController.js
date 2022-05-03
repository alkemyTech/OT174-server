const { New } = require("../models/New");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.getNewById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const news = await New.findOne({
      where: id,
    });

    if (!news) {
      return res.status(HttpCodesEnum.NOT_FOUND).send("New not found");
    }

    return res.json({ New: news });
  } catch (err) {
    return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({ message: err.message });
  }
};
