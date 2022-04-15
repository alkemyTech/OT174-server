var express = require('express')
const { body, validationResult } = require('express-validator');
var router = express.Router()
var user = require('../models/index')
const UsuarioController = require('../controllers/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
})

router.post('/auth/register',UsuarioController.AddUsuario)


console.log()

module.exports = router

// crear el usuario en la base de datos
// const sql = `INSERT INTO users (firstName, lastName, email, password, image, roleId) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${image}', '${roleId}')`;
// user.User.sequelize.query(sql).then((user) => {
//   res.status(200).json({
//     message: "Usuario creado correctamente",

//   });
// }
// );
