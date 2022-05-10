const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const { roleIdsEnum } = require("../enums/roleIdsEnum");

module.exports = {
  isAdmin: (req, res, next) => {
    return req.user.roleId === roleIdsEnum.ADMIN
      ? next()
      : res
          .status(HttpCodesEnum.FORBBIDEN)
          .json({ message: HttpCodesEnum.STATUS_FORBBIDEN });
  },
};
