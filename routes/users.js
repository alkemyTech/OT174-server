var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const middleware = require('../middlewares/authMiddleware')



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*DELETE user by id */ 
router.delete('/:id', middleware.validateToken ,userController.v1.deleteUser);

module.exports = router;
