var express = require('express')
const { body, validationResult, check, oneOf } = require('express-validator');
const { validarCampos} = require('../middlewares/validarCamposMiddlewar');
var user = require('../models/index')
const UsuarioController = require('../controllers/usersController')
const { emailExiste, existeUsuarioPorId } = require('../helpers/db-validatiors')
const bcryptjs = require('bcryptjs')
const {validateCreateUser} = require('../middlewares/ValidateMiddewar')


var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
});

// * Registro de usuarios y validaciones de campos de registro

router.post('/auth/register',validateCreateUser,UsuarioController.addUsuario)




module.exports = router

