var express = require('express');
var router = express.Router();
const getAllUsers=require("../controllers/getAllUsers");
const verifyUserRol=require("../middlewares/verifyUserRol")

/* GET users listing. */
router.get('/',verifyUserRol,getAllUsers);

module.exports = router;
