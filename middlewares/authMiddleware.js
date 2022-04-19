const jwt = require("jsonwebtoken");


async function verifyToken(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (token) {
        const verify = await jwt.verify(token, process.env.SECRET_JWT);
        req.userId = verify.id;
        console.log(verify);
      } else {
        return res.status(401).json({
          auth: false,
          msg: "No token provided",
        });
      }
      next()
    } catch {
      res.status(403).json({
        auth: false,
        msg: "Invalid token provided",
      });
    }
   
  }