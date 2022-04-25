var express = require("express");
var router = express.Router();
const loginRouter = require("./login");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//usa el router de login para iniciar sesion
router.use("/auth/login", loginRouter);

module.exports = router;
