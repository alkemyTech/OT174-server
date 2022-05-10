const { check, validationResult } = require("express-validator");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpCodesEnum.BAD_REQUEST)
      .json({ errors: errors.array() });
  }
  next();
};

const validateUser = [
  check("email")
    .notEmpty()
    .withMessage("You need to enter an email!")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email. Ej:name@mail.com")
    .bail(),

  check("lastName")
    .notEmpty()
    .withMessage("You need to enter a last name!")
    .bail()
    .withMessage("LastName can only contain letters")
    .bail(),

  check("firstName")
    .notEmpty()
    .withMessage("You need to enter a first name!")
    .bail()
    .withMessage("FirstName can only contain letters")
    .bail(),

  check("password")
    .notEmpty()
    .withMessage("You need to enter a password!")
    .bail()
    .isLength({ min: 6 })
    .withMessage("The password must be at least 6 characters long")
    .bail(),
  errorHandler,
];

module.exports = { validateUser };
