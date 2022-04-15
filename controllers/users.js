var user = require("../models/index");

const AddUsuario = (req, res, next) => {
  const { firstName, lastName, email, password, image, roleId } = req.body;

  //   if (!firstName || !lastName || !email || !password || !image || !roleId) {
  //     return res.status(400).json({
  //       success: false,
  //       message: "All fields are required to register (¬‿¬)",
  //     });
  //   }
  usersdb = user.User;
  usersdb
    .create({
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
};

module.exports = {
  AddUsuario,
};

// crear el usuario en la base de datos
// const sql = `INSERT INTO users (firstName, lastName, email, password, image, roleId) VALUES ('${firstName}', '${lastName}', '${email}', '${password}', '${image}', '${roleId}')`;
// user.User.sequelize.query(sql).then((user) => {
//   res.status(200).json({
//     message: "Usuario creado correctamente",

//   });
// }
// );
