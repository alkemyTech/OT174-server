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
    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_JWT_KEY, {
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

exports.me = (req, res) => {
  res.status(200).json({ status: 'me', data: req.User })
};


/*
exports.me = async (req, res) => {
  try {
   const token = req.headers.authorization.split(" ")[1];
  const user = await req.User.email
  const jwtDecoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
  console.log(user)

 const user = await User.findOne({
    where: { id},
  });

 
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({
      msg: "There was a problem getting the user data, check with the administrator",
    });
  }
};*/
