const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models/index");
const { HttpCodesEnum } = require("../enums/httpCodesEnum");

exports.me = (req, res) => {
  res.status(200).json({ status: "me", data: req.user });
};

