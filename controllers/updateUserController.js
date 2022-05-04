const { User } = require("../models/index");

const updateUser = async (req, res,next) => {
  const { id } = req.params;
  
  if (!id) return res.status(404).json({ message: "Debe enviar un id" });
  
  const userDb = await User.findByPk(id);
  
  if (!userDb) return res.status(404).json({ error: "Usuario no encontrado" });
  
  try {
      await userDb.update({
          ...req.body
      })
      res.status(204).send()
  } catch (error) {
      next(error)
  }
};

module.exports = updateUser;
