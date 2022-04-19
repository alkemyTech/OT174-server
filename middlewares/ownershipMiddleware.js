const { isAdmin } = require("./isAdmin");

module.exports = {
  checkOwnership: (req, res, next) => {
    return +req.params.id === req.decodedToken.userId ? next() : isAdmin();
  },
};
