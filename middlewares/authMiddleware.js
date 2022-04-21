const jwt = require("jsonwebtoken");


async function validateToken(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (token) {
        const validate = await jwt.verify(token, process.env.SECRET_JWT);
        req.userId = validate.id;
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