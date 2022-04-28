var express = require('express');
var router = express.Router();
const { authenticate } = require("../middlewares/authMiddleware.js");
const controller = require("../controllers/authController.js");


router.post("/register", controller.register);

module.exports = router;