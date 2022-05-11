const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const newsRepository = require("../repositories/news");
const { getById: getCategoryById } = require("../repositories/categories");

exports.create = async (res, name, content, image, categoryId) => {
  try {
    //check if categoryId exists first
    const category = getCategoryById(categoryId);
    if (!category) {
      return res
        .status(HttpCodesEnum.NOT_FOUND)
        .json(HttpCodesEnum.STATUS_NOT_FOUND);
    }
    const news = newsRepository.create(name, content, image, categoryId);
    return res.status(HttpCodesEnum.CREATED).json(news);
  } catch (err) {
    return res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .json({ message: HttpCodesEnum.SERVER_INTERNAL_ERROR });
  }
};
