var express = require('express')
const { body, validationResult, check, oneOf } = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campos');
var user = require('../models/index')
const UsuarioController = require('../controllers/usersController')
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validatiors')
const bcryptjs = require('bcryptjs')


var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
});

// * Registro de usuarios y validaciones de campos de registro

router.post('/auth/register',[
  check('firstName', 'Name is required').not().isEmpty(),
  check('lastName', 'Last name is required').not().isEmpty(),
  check('password', 'The password must have at least 6 characters').isLength({ min: 6 }),
  check('password', 'The password must have at least one number').matches(/\d/),
  check('password', 'The password must have at least one uppercase letter').matches(/[A-Z]/),
  check('password', 'Password must have at least one lowercase letter').matches(/[a-z]/),
  check('password', 'The password must have at least one special character').matches(/[!@#$%^&*(),.?":{}|<>]/),
  check('email', 'invalid email').isEmail(),
  check('email').custom(emailExiste),  
  validarCampos
],UsuarioController.AddUsuario)




module.exports = router

