var express = require('express')
var router = express.Router()
var user = require('../models/index')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource GET')
})

router.post('/auth/register', function (req, res, next) {
  const { firstName, lastName, email, password, image, roleId } = req.body

  if (!firstName || !lastName || !email || !password || !image || !roleId) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required to register (¬‿¬)'
    })
  }
  usersdb = user.User
  usersdb.findAll({ where: { email: email } }).then(user => {
    if (user.length > 0) {
      res.status(400).json({
        msg: `User ${email} already exists`
      })
    } else {
      usersdb
        .create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          image: image,
          roleId: roleId
        })
        .then(user => {
          res.status(200).json({
            state: true,
            message: 'User created successfully',
            msg: `Felicitaciones ${firstName} ${lastName} ya puedes iniciar sesion`,
            user: user
          })
        })
        .catch(err => {
          res.status(400).json({
            state: false,
            message: 'Error creating user',
            error: err
          })
        })
    }
  })
})

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
