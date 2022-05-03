const bcrypt = require("bcryptjs");
const { User } = require("../models/index");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, image, password, roleId } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      firstName,
      lastName,
      email,
      image,
      password: hash,
      roleId,
    });
    res.status(HttpCodesEnum.OK).json({ "saved user": savedUser });
  } catch (err) {
    res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR);
  }
};
