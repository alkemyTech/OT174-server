const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.me = (req, res) => {
  res.status(HttpCodesEnum.OK).json({ status: "me", data: req.user });
};

