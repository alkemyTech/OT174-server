var express = require("express");
var router = express.Router();
const controller = require("../controllers/authController.js");
const usersMiddleware = require("../middlewares/usersMiddleware.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/register", usersMiddleware.validateUser, controller.register);
router.get("/me", authMiddleware.authenticate, controller.me);

module.exports = router;
