const { Router } = require("express");
const router = Router();
const loginController = require("../controllers/loginController");
const { body } = require("express-validator");

router.post(
  "/",
  body("email").isEmail(),
  body("password").isLength({ min: 4 }),
  loginController
);

module.exports = router;
