// const Role = require('../models/role');
const user = require("../models/index");


// ? Verificar si el correo existe en la base de datos
const emailExiste = async (correo = "") => {
  usersdb = user.User;
  const existeUsuario = await usersdb.findOne({ where: { email: correo } });
  if (existeUsuario) {
    throw new Error(
      `El correo ${correo} ya está registrado en la base de datos `
    );
  }

  return true;
};


module.exports = {
  emailExiste,
  
};
