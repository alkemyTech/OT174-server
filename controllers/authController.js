const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const db = require("../models/index");
const { User } = require("../models/index");

exports.register = async (req, res) => {
    try {
      const { firstName, lastName, email, image, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const savedUser = await User.create({
        firstName,
        lastName,
        email,
        image,
        password: hash,
      });
      const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_JWT_KEY, {
        expiresIn: 86400, //24 hs
      });
      res.status(200).json({ "saved user": savedUser, token: token });
      
    } catch (err) {
      res.status(500).send("Internal Server Error");
      console.log(err);
    }
  };