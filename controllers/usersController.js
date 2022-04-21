var user = require("../models/index");
const bcryptjs = require("bcryptjs");
// const { hashPassword } = require("../helpers/bcryptjs");

const addUsuario = async (req, res, next) => {
  const { firstName, lastName, email, password, image, roleId } = req.body;
  usersdb = user.User;

 await usersdb
    .create({
      firstName,
      lastName,
      email,
      password: bcryptjs.hashSync(password, 10),
      image,
      roleId,
      // body
    })
    .then(function (user) {
      res.json({
        success: true,
        message: "Successfully created new user",
        user: user,
      });
    })
    .catch(function (err) {
      res.json({
        success: false,
        message: "Error: server error",
        error: err,
      });
    });
};

module.exports = {
  addUsuario,
};

// crear el usuario en la base de datos
// const sql = `INSERT INTO users (firstName, lastName, email, password, image, roleId) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${image}', '${roleId}')`;
// user.User.sequelize.query(sql).then((user) => {
//   res.status(200).json({
//     message: "Usuario creado correctamente",

//   });
// }
// );
