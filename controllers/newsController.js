const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const newsService = require("../services/news");
const { validateRequest } = require("../util/validateReq");

exports.updateNewsById = async (req, res, next) => {
  validateRequest(req, res);
  const newsId = req.params.id;
  const { name, content, image, categoryId } = req.body;

  await newsService.update(res, newsId, name, content, image, categoryId);
};
