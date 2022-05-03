var express = require("express");
var router = express.Router();
const validateUser = require("../validators/validateUser");
const registerController = require("../controllers/registerController");

router.post("/register", validateUser, registerController);

module.exports = router;