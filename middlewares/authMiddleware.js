const jwt = require('jsonwebtoken');
//const  where  = require('sequelize/types');
const { User } = require("../models/index");

 const authenticate = async (req, res, next) => {
    try {
      let token = req.header("Authorization");
     // console.log(token)
      if (!token) return res.status(403).json({ status: "no token provided" });
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY);
      console.log(decoded)
      req.userId = decoded.id;
      console.log( req)
   
      const user = await User.findOne({where : {req}});
      console.log(user.id);
      req.dataUser = user;
      if (!user) return res.status(404).json({ status: "no user found" });
      req.token = token
      next();
    } catch (error) {
      console.log(error)
      return res.status(401).json({ status: "unauthorized" });
    }
  };
  

/*
const authenticate = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];

    const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);

    req.token = verified.user;

    next();
    
}*/

module.exports = {authenticate}