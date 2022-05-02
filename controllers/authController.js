const jwt = require("jsonwebtoken");
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
    const token = jwt.sign({ savedUser }, process.env.SECRET_JWT_KEY, {
      expiresIn: 86400, //24 hs
    });
    res
      .status(HttpCodesEnum.OK)
      .json({ "saved user": savedUser, token: token });
  } catch (err) {
    res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .send("Internal Server Error");
  }
};
