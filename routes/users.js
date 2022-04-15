var express = require('express')
const { body, validationResult, check } = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campos');
var user = require('../models/index')
const UsuarioController = require('../controllers/users')

var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
})

router.post('/auth/register', [
  check('firstName', 'Name is required').not().isEmpty(),
  check('lastName', 'Last name is required').not().isEmpty(),
  validarCampos
],UsuarioController.AddUsuario)


console.log()

module.exports = router

