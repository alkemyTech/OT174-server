var express = require('express')
const UsuarioController = require('../controllers/users.controller')
const {validateCreateUser} = require('../middlewares/users.validate.middleware')


var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
});

// * Registro de usuarios y validaciones de campos de registro

router.post('/auth/register',validateCreateUser,UsuarioController.AddUsuario)




module.exports = router

