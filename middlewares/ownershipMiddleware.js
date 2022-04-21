const { isAdmin } = require("./adminMiddleware");

module.exports = {
  checkOwnership: (req, res, next) => {
    return +req.params.id === req.userId ? next() : isAdmin();
  },
};
