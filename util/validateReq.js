const { validationResult } = require("express-validator");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.validateRequest = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpCodesEnum.BAD_REQUEST)
      .json({ message: HttpCodesEnum.STATUS_BAD_REQUEST });
  }
};
