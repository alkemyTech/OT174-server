const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const { isAdmin } = require("../middlewares/adminMiddleware");
const { param, body } = require("express-validator");

const updateCreateValidator = [
  body("name").isString().exists(),
  body("image").isURL().exists(),
  body("content").isString().exists(),
  body("categoryId").isInt({ min: 1 }).exists(),
];
const idValidator = [param("id").isInt({ min: 1 }).exists()];

router.put(
  "/:id",
  isAdmin,
  idValidator,
  updateCreateValidator,
  newsController.updateNewsById
);

module.exports = router;
