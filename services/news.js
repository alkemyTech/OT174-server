const newsRepository = require("../repositories/news");
const categoriesRepository = require("../repositories/categories");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.update = async (res, id, name, content, image, categoryId) => {
  try {
    const validCategory = await categoriesRepository.getById(categoryId);
    let news = await newsRepository.getById(id);

    if (!validCategory || !news) {
      return res
        .status(HttpCodesEnum.NOT_FOUND)
        .json({ message: HttpCodesEnum.STATUS_NOT_FOUND });
    }

    news = await newsRepository.update(id, name, content, image, categoryId);
    return res.status(HttpCodesEnum.UPDATED).json(news);
  } catch (err) {
    return res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .json({ message: HttpCodesEnum.STATUS_SERVER_INTERNAL_ERROR });
  }
};
