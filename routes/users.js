var express = require("express");
var router = express.Router();
var user = require("../models/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource GET");
});

router.post("/auth/register", function (req, res, next) {
  const { firstName, lastName, email, password, image, roleId } = req.body;
 // verificar que el email no exista en la base de datos 

  // buscar que el correo exista en la base de datos y que no este registrado
  user.User.findOne({ where: { email: email } }).then((user) => {
    if (user) {
      res.status(400).json({
        message: "El correo ya esta registrado",
      });
    } 
 

  user.User.create({
    firstName,
    lastName,
    email,
    password,
    image,
    roleId,
    // body
  })
    .then(function (user) {
      res.json({
        success: true,
        message: "Usuario creado correctamente",
        user: user,
      });
    })
    .catch(function (err) {
      res.json({
        success: false,
        message: "Error al crear el usuario",
        error: err,
      });
    });




  });
});

module.exports = router;



// user.User.create({
//   firstName,
//   lastName,
//   email,
//   password,
//   image,
//   roleId,
//   // body
// })
//   .then(function (user) {
//     res.json({
//       success: true,
//       message: "Usuario creado correctamente",
//       user: user,
//     });
//   })
//   .catch(function (err) {
//     res.json({
//       success: false,
//       message: "Error al crear el usuario",
//       error: err,
//     });
//   });