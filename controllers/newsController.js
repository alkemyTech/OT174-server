const { validateRequest } = require("../util/validateReq");
const newsService = require("../services/news");

exports.createNews = async (req, res, next) => {
  validateRequest(req, res);
  const { name, content, image, categoryId } = req.body;
  newsService.create(res, name, content, image, categoryId);
};
