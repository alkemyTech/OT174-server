var user = require("../models/index");
const bcryptjs = require("bcryptjs");
const { sendEmail } = require("../helpers/sgMail");

const AddUsuario = (req, res, next) => {
  const { firstName, lastName, email, password, image, roleId } = req.body;
  usersdb = user.User;

  usersdb
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
      sendEmail(user.email, user.firstName, user.lastName);
      res.json({
        message: "User created successfully",
        user,
      });
    })
    .catch(function (err) {
      console.log("err ::::::", err);
      res.json({
        success: false,
        message: "Error: server error",
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
