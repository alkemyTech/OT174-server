const jwt = require("jsonwebtoken");
const { ERROR_UNAUTHORIZED } = require("../enums/messages");

const validateExistsToken = (req, res) => {
  const token = req.headers["x-access-token"];
  if (token) {
    return token;
  } else {
    res.status(401).json({
      auth: ERROR_UNAUTHORIZED,
      msg: "No token provided",
    });
  }
};
const getUserIdByToken = (token) => {
  const validate = jwt.verify(token, process.env.SECRET_JWT);
  if (validate) {
    return validate.id;
  } else {
    return res.status(403).json({
      auth: ERROR_UNAUTHORIZED,
      msg: "Invalid token provided",
    });
  }
};

module.exports = {
  validateExistsToken,
  getUserIdByToken,
};
