const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  //verifica si hay errores en la validacion (email,password)
  if (!errors.isEmpty()) {
    return res.json({ok:false});
  }
  try {
    //busca el usuario con ese email en la db
    const user = await User.findOne({ where: { email } });
    //verifica si el usuario existe y compara las passwords
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.json({ user: user.email });
    }
    res.status(401).json({ ok: false });
  } catch (error) {
    res.json({ ok: false });
  }
};

module.exports = loginController;
