const { HttpCodesEnum, roleIds } = require("../enums");

module.exports = {
  isAdmin: (req, res, next) => {
    return req.user.roleId === roleIds.ADMIN
      ? next()
      : res.status(HttpCodesEnum.FORBBIDEN).json({ HttpCodesEnum.STATUS_FORBBIDEN });
  },
};
