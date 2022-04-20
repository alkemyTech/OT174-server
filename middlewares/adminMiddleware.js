const constants = require("../enums/constants");
const messages = require("../enums/messages");

module.exports = {
  isAdmin: (req, res, next) => {
    return req.user.roleId === constants.ADMIN_ROLE_ID
      ? next()
      : res
          .status(constants.ERROR_FORBIDDEN)
          .json({ message: messages.ERROR_FORBIDDEN });
  },
};
