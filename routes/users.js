var express = require('express');
var router = express.Router();
const updateUser=require("../controllers/updateUserController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.patch("/:id",updateUser)

module.exports = router;
