const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middlewares/adminMiddleware");
const { body } = require("express-validator");
const newsController = require("../controllers/newsController");

const createValidator = [
  body("name").isString().exists(),
  body("image").isURL().exists(),
  body("categoryId").isInt({ min: 1 }).exists(),
  body("content").isString().exists(),
];

router.post("", isAdmin, createValidator, newsController.createNews);

module.exports = router;
