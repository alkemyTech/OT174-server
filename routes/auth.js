var express = require("express");
var router = express.Router();
const controller = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/me", authMiddleware.authenticate, controller.me);

module.exports = router;
