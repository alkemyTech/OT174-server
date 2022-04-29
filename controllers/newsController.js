const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const newsService = require("../services/news");
const { validationResult } = require("express-validator");

exports.updateNewsById = async (req, res, next) => {
  validateRequest(req);
  const newsId = req.params.id;
  const { name, content, image, categoryId } = req.body;

  newsService.update(res, newsId, name, content, image, categoryId);
};

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpCodesEnum.BAD_REQUEST)
      .json({ message: HttpCodesEnum.STATUS_BAD_REQUEST });
  }
};
