var user = require("../models/index");

const AddUsuario = (req, res, next) => {
  const { firstName, lastName, email, password, image, roleId } = req.body;

  if (!firstName || !lastName || !email || !password || !image || !roleId) {
    return res.status(400).json({
      success: false,
      message: "All fields are required to register (¬‿¬)",
    });
  }
  usersdb = user.User;
  usersdb.findAll({ where: { email: email } }).then((user) => {
    if (user.length > 0) {
      res.status(400).json({
        msg: `User ${email} already exists`,
      });
    } else {
      usersdb
        .create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          image: image,
          roleId: roleId,
        })
        .then((user) => {
          res.status(200).json({
            state: true,
            message: "User created successfully",
            msg: `Felicitaciones ${firstName} ${lastName} ya puedes iniciar sesion`,
            user: user,
          });
        })
        .catch((err) => {
          res.status(400).json({
            state: false,
            message: "Error creating user",
            error: err,
          });
        });
    }
  });
};

module.exports = {
    AddUsuario,
};
