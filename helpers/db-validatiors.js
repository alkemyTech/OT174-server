// const Role = require('../models/role');
const user = require("../models/index");

// const esRoleValido = async (rol = '') => {

//     const existeRol = await Role.findOne({
//         rol
//     });
//     if (!existeRol) {
//         throw new Error(`El rol ${ rol } no está registrado en la base datos `);
//     }
// }

const emailExiste = async (correo = "") => {
  // Verificar si el correo existe
  usersdb = user.User;
  const existeUsuario = await usersdb.findOne({ where: { email: correo } });
  if (existeUsuario) {
    throw new Error(
      `El correo ${correo} ya está registrado en la base de datos `
    );
  }

  return true;
};

const existeUsuarioPorId = async (id) => {
  // Verificar si el correo existe
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = {
  // esRoleValido,
  emailExiste,
  existeUsuarioPorId,
};
