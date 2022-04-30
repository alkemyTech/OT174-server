var express = require("express");
var router = express.Router();
const controller = require("../controllers/authController.js");
const usersMiddleware = require("../middlewares/usersMiddleware.js");

router.post("/register", usersMiddleware.validateUser, controller.register);

module.exports = router;
